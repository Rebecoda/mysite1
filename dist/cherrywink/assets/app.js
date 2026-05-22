const products = window.CHERRY_WINK_PRODUCTS || [];
const STORAGE_KEY = 'cherry-wink-cart-v1';

function getBasePath() {
  return document.body?.dataset.basePath || '.';
}

function withBase(path) {
  const basePath = getBasePath();
  if (basePath === '.' || basePath === '') {
    return path;
  }
  return `${basePath}/${path}`;
}

function productUrl(product) {
  return withBase(`products/index.html?slug=${encodeURIComponent(product.slug)}`);
}

function formatPrice(value) {
  return `$${Number(value).toFixed(0)}`;
}

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    return [];
  }
}

function writeCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function findProduct(slug) {
  return products.find((product) => product.slug === slug);
}

function getCartDetailed() {
  return readCart()
    .map((item) => {
      const product = findProduct(item.slug);
      if (!product) return null;
      return {
        ...product,
        qty: item.qty,
        lineTotal: item.qty * product.price,
      };
    })
    .filter(Boolean);
}

function getCartCount() {
  return getCartDetailed().reduce((sum, item) => sum + item.qty, 0);
}

function getCartSubtotal() {
  return getCartDetailed().reduce((sum, item) => sum + item.lineTotal, 0);
}

function addToCart(slug, qty = 1) {
  const cart = readCart();
  const existingItem = cart.find((item) => item.slug === slug);

  if (existingItem) {
    existingItem.qty += qty;
  } else {
    cart.push({ slug, qty });
  }

  writeCart(cart);
  refreshCartUI();
}

function setCartQty(slug, qty) {
  const cart = readCart();
  const nextCart = cart
    .map((item) => {
      if (item.slug !== slug) return item;
      return { ...item, qty };
    })
    .filter((item) => item.qty > 0);

  writeCart(nextCart);
  refreshCartUI();
}

function removeFromCart(slug) {
  const cart = readCart().filter((item) => item.slug !== slug);
  writeCart(cart);
  refreshCartUI();
}

function getProductCardMarkup(product) {
  return `
    <article class="product-card" data-color="${product.color}">
      <div class="card-label">${product.label}</div>
      <div class="card-media-shell">
        <a class="card-link" href="${productUrl(product)}">
          <div class="card-media has-photo">
            <img class="card-photo" src="${withBase(product.image)}" alt="${product.title}" />
          </div>
        </a>
        <button class="card-wishlist" aria-label="Add to wishlist" aria-pressed="false" data-wishlist-toggle="${product.slug}" type="button">♡</button>
      </div>
      <div class="card-info compact">
        <h2>${product.title}</h2>
        <p class="card-price">${formatPrice(product.price)}</p>
        <button class="card-action" type="button" data-add-to-cart="${product.slug}">Quick Add</button>
      </div>
    </article>
  `;
}

function renderCollectionGrid() {
  const grid = document.querySelector('[data-product-grid]');
  const count = document.querySelector('[data-product-count]');
  if (!grid) return;

  grid.innerHTML = products.map(getProductCardMarkup).join('');
  if (count) {
    count.textContent = `${products.length} products`;
  }
}

function renderFeaturedGrid() {
  const grid = document.querySelector('[data-featured-grid]');
  if (!grid) return;

  grid.innerHTML = products.slice(0, 4).map(getProductCardMarkup).join('');
}

function renderRelatedProducts(currentSlug) {
  const grid = document.querySelector('[data-related-grid]');
  if (!grid) return;

  const related = products.filter((product) => product.slug !== currentSlug).slice(0, 4);
  grid.innerHTML = related.map(getProductCardMarkup).join('');
}

function renderProductDetail() {
  const mount = document.querySelector('[data-product-detail]');
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug') || 'big-bloom-clip';
  const product = findProduct(slug) || products[0];

  document.title = `Cherry Wink — ${product.title}`;

  mount.innerHTML = `
    <div class="product-detail-layout">
      <div class="product-gallery">
        <div class="product-gallery-main">
          <img src="${withBase(product.image)}" alt="${product.title}" />
        </div>
        <div class="product-gallery-thumbs">
          <div class="product-thumb-card"><img src="${withBase(product.image)}" alt="${product.title}" /></div>
          <div class="product-thumb-card"><img src="${withBase(product.image)}" alt="${product.title}" /></div>
          <div class="product-thumb-card"><img src="${withBase(product.image)}" alt="${product.title}" /></div>
        </div>
      </div>
      <div class="product-copy-panel">
        <p class="eyebrow">${product.label}</p>
        <h1>${product.title}</h1>
        <p class="product-price-large">${formatPrice(product.price)}</p>
        <p class="product-description">${product.description}</p>
        <div class="product-option-group">
          <span class="toolbar-label">Color</span>
          <div class="option-chips">
            <button class="chip is-active" type="button">${product.color.replace(/-/g, ' ')}</button>
            <button class="chip" type="button">Buttercream</button>
            <button class="chip" type="button">Cherry Kiss</button>
          </div>
        </div>
        <div class="product-option-group">
          <span class="toolbar-label">Category</span>
          <div class="option-chips">
            <button class="chip is-active" type="button">${product.category}</button>
          </div>
        </div>
        <div class="product-actions-row">
          <button class="checkout-button product-add-button" type="button" data-add-to-cart="${product.slug}">Add to Bag</button>
          <a class="secondary-button" href="${withBase('collections/all/index.html')}">Back to Shop</a>
        </div>
        <div class="product-meta-block">
          <h3>Details</h3>
          <ul>
            ${product.details.map((detail) => `<li>${detail}</li>`).join('')}
          </ul>
        </div>
        <div class="product-meta-block">
          <h3>Materials</h3>
          <ul>
            ${product.materials.map((material) => `<li>${material}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  renderRelatedProducts(product.slug);
}

function renderDrawerCart() {
  const container = document.querySelector('[data-drawer-items]');
  const subtotal = document.querySelector('[data-drawer-subtotal]');
  if (!container) return;

  const items = getCartDetailed();
  if (!items.length) {
    container.innerHTML = '<div class="empty-state small"><p>Your bag is still empty. Add a few soft essentials to make this feel like a real checkout flow.</p><a class="secondary-button" href="' + withBase('collections/all/index.html') + '">Shop All</a></div>';
  } else {
    container.innerHTML = items.map((item) => `
      <article class="cart-item">
        <div class="cart-thumb has-photo">
          <img class="card-photo" src="${withBase(item.image)}" alt="${item.title}" />
        </div>
        <div>
          <h3>${item.title}</h3>
          <p>${item.color.replace(/-/g, ' ')} · ${formatPrice(item.price)} · Qty ${item.qty}</p>
          <div class="mini-cart-actions">
            <button type="button" class="chip" data-cart-decrease="${item.slug}">-</button>
            <button type="button" class="chip" data-cart-increase="${item.slug}">+</button>
            <button type="button" class="chip" data-remove-item="${item.slug}">Remove</button>
          </div>
        </div>
      </article>
    `).join('');
  }

  if (subtotal) {
    subtotal.textContent = formatPrice(getCartSubtotal());
  }
}

function renderCartPage() {
  const container = document.querySelector('[data-cart-page-items]');
  const subtotal = document.querySelector('[data-cart-page-subtotal]');
  if (!container) return;

  const items = getCartDetailed();

  if (!items.length) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>Your bag is empty</h2>
        <p>This demo already has a working local cart, but it needs a few products before checkout feels convincing.</p>
        <a class="secondary-button" href="${withBase('collections/all/index.html')}">Shop All</a>
      </div>
    `;
  } else {
    container.innerHTML = items.map((item) => `
      <article class="cart-page-item">
        <div class="cart-page-thumb">
          <img src="${withBase(item.image)}" alt="${item.title}" />
        </div>
        <div class="cart-page-copy">
          <p class="eyebrow">${item.category}</p>
          <h2>${item.title}</h2>
          <p>${item.summary}</p>
          <div class="cart-page-controls">
            <button type="button" class="chip" data-cart-decrease="${item.slug}">-</button>
            <span>Qty ${item.qty}</span>
            <button type="button" class="chip" data-cart-increase="${item.slug}">+</button>
            <button type="button" class="chip" data-remove-item="${item.slug}">Remove</button>
          </div>
        </div>
        <div class="cart-page-price">${formatPrice(item.lineTotal)}</div>
      </article>
    `).join('');
  }

  if (subtotal) {
    subtotal.textContent = formatPrice(getCartSubtotal());
  }
}

function renderCartCount() {
  document.querySelectorAll('[data-cart-count]').forEach((node) => {
    node.textContent = String(getCartCount());
  });
}

function setCart(open) {
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartBackdrop = document.querySelector('.cart-backdrop');
  cartDrawer?.classList.toggle('is-open', open);
  cartBackdrop?.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function setColorFilter(color) {
  const cards = document.querySelectorAll('.product-card[data-color]');
  const count = document.querySelector('[data-product-count]');
  let visibleCount = 0;

  document.querySelectorAll('[data-color-filter]').forEach((chip) => {
    chip.classList.toggle('is-active', chip.dataset.colorFilter === color);
  });

  cards.forEach((card) => {
    const matches = color === 'all' || card.dataset.color === color;
    card.style.display = matches ? '' : 'none';
    if (matches) visibleCount += 1;
  });

  if (count) {
    count.textContent = `${visibleCount} products`;
  }
}

function refreshCartUI() {
  renderCartCount();
  renderDrawerCart();
  renderCartPage();
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const openCartTrigger = target.closest('[data-open-cart]');
    const closeCartTrigger = target.closest('[data-close-cart]');
    const backdrop = target.closest('.cart-backdrop');
    const filterToggle = target.closest('[data-toggle-filters]');
    const colorFilter = target.closest('[data-color-filter]');
    const addButton = target.closest('[data-add-to-cart]');
    const increaseButton = target.closest('[data-cart-increase]');
    const decreaseButton = target.closest('[data-cart-decrease]');
    const removeButton = target.closest('[data-remove-item]');
    const wishlistButton = target.closest('[data-wishlist-toggle]');

    if (openCartTrigger) {
      setCart(true);
      return;
    }

    if (closeCartTrigger || backdrop) {
      setCart(false);
      return;
    }

    if (filterToggle) {
      document.querySelector('.filters')?.classList.toggle('is-open');
      return;
    }

    if (colorFilter instanceof HTMLElement) {
      setColorFilter(colorFilter.dataset.colorFilter || 'all');
      return;
    }

    if (addButton instanceof HTMLElement) {
      addToCart(addButton.dataset.addToCart, 1);
      setCart(true);
      return;
    }

    if (wishlistButton instanceof HTMLElement) {
      const isPressed = wishlistButton.getAttribute('aria-pressed') === 'true';
      wishlistButton.setAttribute('aria-pressed', String(!isPressed));
      wishlistButton.classList.toggle('is-active', !isPressed);
      wishlistButton.textContent = !isPressed ? '♥' : '♡';
      return;
    }

    if (increaseButton instanceof HTMLElement) {
      const item = readCart().find((entry) => entry.slug === increaseButton.dataset.cartIncrease);
      if (item) setCartQty(item.slug, item.qty + 1);
      return;
    }

    if (decreaseButton instanceof HTMLElement) {
      const item = readCart().find((entry) => entry.slug === decreaseButton.dataset.cartDecrease);
      if (item) setCartQty(item.slug, item.qty - 1);
      return;
    }

    if (removeButton instanceof HTMLElement) {
      removeFromCart(removeButton.dataset.removeItem);
    }
  });
}

function init() {
  renderCollectionGrid();
  renderFeaturedGrid();
  renderProductDetail();
  renderRelatedProducts(new URLSearchParams(window.location.search).get('slug') || 'big-bloom-clip');
  bindEvents();
  refreshCartUI();
  if (document.querySelector('[data-product-grid]')) {
    setColorFilter('all');
  }
}

init();
