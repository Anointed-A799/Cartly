const currencyFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

const CART_KEY = "cartly-cart";
const WISHLIST_KEY = "cartly-wishlist";
const ORDERS_KEY = "cartly-orders";
const THEME_KEY = "cartly-theme";
const DELIVERY_FEE = 2800;

const products = [
  {
    id: 1,
    name: "Infinix Hot 40 Pro",
    price: 127500,
    originalPrice: 158000,
    category: "Electronics",
    seller: "GadgetHub NG",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
    badge: "-19%",
    stock: 20,
    description:
      "A stylish and affordable smartphone built for everyday browsing, content creation and strong battery life.",
    isFeatured: true,
    isTrending: true,
    isNew: true,
    createdAt: "2026-10-09",
    sellerImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Aso-oke Print Wrap Skirt",
    price: 32000,
    originalPrice: 39500,
    category: "Fashion",
    seller: "Naija Moda House",
    rating: 4.9,
    image:
      "https://res.cloudinary.com/i8jrmtyw/image/upload/v1791615683/1791615431832.jpg",
    badge: "-19%",
    stock: 11,
    description:
      "A statement wrap skirt in bold Nigerian-inspired print, ideal for events, gatherings and elevated casual styling.",
    isFeatured: true,
    isTrending: true,
    isNew: true,
    createdAt: "2026-10-01",
    sellerImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Binatone Rice Cooker",
    price: 47000,
    originalPrice: 59000,
    category: "Home and living",
    seller: "Lagos Living Co.",
    rating: 4.7,
    image:
      "https://res.cloudinary.com/i8jrmtyw/image/upload/v1791615688/1791615431825.jpg",
    badge: "-20%",
    stock: 18,
    description:
      "A dependable rice cooker that helps make quick, fuss-free meals for busy homes and modern kitchens.",
    isFeatured: true,
    isTrending: false,
    isNew: true,
    createdAt: "2026-09-28",
    sellerImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Carrot Glow Toner",
    price: 14800,
    originalPrice: 19500,
    category: "Beauty",
    seller: "Glow Africa",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
    badge: "-24%",
    stock: 26,
    description:
      "A soothing glow toner made for balancing tone, refreshing skin and supporting a healthy daily skincare ritual.",
    isFeatured: false,
    isTrending: true,
    isNew: true,
    createdAt: "2026-10-06",
    sellerImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Classic Leather Sandals",
    price: 36000,
    originalPrice: 46000,
    category: "Accessories",
    seller: "Aso Rock Leather",
    rating: 4.8,
    image:
      "https://res.cloudinary.com/i8jrmtyw/image/upload/v1791615686/1791615431819.jpg",
    badge: "-22%",
    stock: 16,
    description:
      "Handsome leather sandals built for comfort, style and long wear in hot everyday conditions.",
    isFeatured: true,
    isTrending: true,
    isNew: false,
    createdAt: "2026-08-16",
    sellerImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Grocery Essentials Basket",
    price: 17800,
    originalPrice: 22000,
    category: "Groceries",
    seller: "Farm2Table NG",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
    badge: "-19%",
    stock: 37,
    description:
      "A well-balanced household basket with pantry essentials, local produce and everyday staples for daily cooking.",
    isFeatured: false,
    isTrending: false,
    isNew: true,
    createdAt: "2026-10-08",
    sellerImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Tecno Camon 20 Premier",
    price: 188000,
    originalPrice: 225000,
    category: "Electronics",
    seller: "GadgetHub NG",
    rating: 4.8,
    image:
      "https://res.cloudinary.com/i8jrmtyw/image/upload/v1791615686/1791615431792.jpg",
    badge: "-16%",
    stock: 13,
    description:
      "A vibrant camera-focused smartphone made for selfies, short videos and reliable daily mobile performance.",
    isFeatured: false,
    isTrending: true,
    isNew: true,
    createdAt: "2026-09-27",
    sellerImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "African Print Cushion Set",
    price: 21000,
    originalPrice: 27500,
    category: "Home and living",
    seller: "Lagos Living Co.",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    badge: "-24%",
    stock: 23,
    description:
      "A colourful cushion set that adds warmth, comfort and personality to couches, bedrooms and lounges.",
    isFeatured: false,
    isTrending: false,
    isNew: true,
    createdAt: "2026-10-04",
    sellerImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Bluetooth Speaker Mini Boom",
    price: 24500,
    originalPrice: 31500,
    category: "Accessories",
    seller: "GadgetHub NG",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80",
    badge: "-22%",
    stock: 17,
    description:
      "A compact speaker with rich sound output, clear bass and portable design for parties and everyday listening.",
    isFeatured: false,
    isTrending: true,
    isNew: true,
    createdAt: "2026-10-03",
    sellerImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Papaya Bright Body Cream",
    price: 12900,
    originalPrice: 16800,
    category: "Beauty",
    seller: "Glow Africa",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80",
    badge: "-23%",
    stock: 30,
    description:
      "A rich, nourishing body cream with natural fruit extracts for softness, hydration and healthy-looking skin.",
    isFeatured: false,
    isTrending: true,
    isNew: false,
    createdAt: "2026-09-16",
    sellerImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Cultural Gold Choker",
    price: 22500,
    originalPrice: 29000,
    category: "Accessories",
    seller: "Naija Moda House",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
    badge: "-22%",
    stock: 10,
    description:
      "A graceful gold choker with a classic finish, designed to complete both traditional and modern outfits.",
    isFeatured: true,
    isTrending: false,
    isNew: true,
    createdAt: "2026-09-22",
    sellerImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Cotton Bathrobe Set",
    price: 16500,
    originalPrice: 21000,
    category: "Home and living",
    seller: "Lagos Living Co.",
    rating: 4.5,
    image:
      "https://res.cloudinary.com/i8jrmtyw/image/upload/v1791615684/1791615431807.jpg",
    badge: "-21%",
    stock: 28,
    description:
      "A soft cotton bathrobe set with a relaxed fit and comfortable feel for rest, recovery and cozy mornings.",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    createdAt: "2026-07-30",
    sellerImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
];

const sellers = [
  {
    name: "Naija Moda House",
    description: "Contemporary Nigerian fashion for everyday elegance, events and statement style.",
    image:
      "https://res.cloudinary.com/i8jrmtyw/image/upload/v1791615688/1791615431802.jpg",
    rating: 4.9,
  },
  {
    name: "GadgetHub NG",
    description: "Phone, audio and home-tech essentials for smart Nigerian living.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
  },
  {
    name: "Lagos Living Co.",
    description: "Home décor and practical household pieces designed for modern urban life.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
  },
  {
    name: "Glow Africa",
    description: "Skincare and beauty picks for healthy glow routines and everyday confidence.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
  },
  {
    name: "Aso Rock Leather",
    description: "Premium leather accessories and everyday essentials for confident styling.",
    image:
      "https://res.cloudinary.com/i8jrmtyw/image/upload/v1791615688/1791615431797.jpg",
    rating: 4.8,
  },
  {
    name: "Farm2Table NG",
    description: "Fresh groceries and pantry staples selected for busy Nigerian households.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
  },
];

let cart = loadSavedItems(CART_KEY);
let wishlist = loadSavedItems(WISHLIST_KEY);
let orders = loadSavedItems(ORDERS_KEY);
let currentCategory = "all";
let currentSort = "popular";
let searchValue = "";
let locationRequestId = 0;
let trackedOrderId = "";

const catalogGrid = document.getElementById("catalogGrid");
const catalogEmptyState = document.getElementById("catalogEmptyState");
const cartDrawer = document.getElementById("cartDrawer");
const wishlistPanel = document.getElementById("wishlistPanel");
const cartItemsContainer = document.getElementById("cartItems");
const wishlistItemsContainer = document.getElementById("wishlistItems");
const productModalBackdrop = document.getElementById("productModalBackdrop");
const productModalContent = document.getElementById("productModalContent");
const checkoutBackdrop = document.getElementById("checkoutBackdrop");
const headerSearchInput = document.getElementById("headerSearchInput");
const sortSelect = document.getElementById("sortSelect");

document.addEventListener("DOMContentLoaded", () => {
  initializeTheme();
  const savedCart = loadSavedItems(CART_KEY);
  const savedWishlist = loadSavedItems(WISHLIST_KEY);
  const savedOrders = loadSavedItems(ORDERS_KEY);
  cart = savedCart;
  wishlist = savedWishlist;
  orders = savedOrders;

  renderFeaturedProducts();
  renderTrendingProducts();
  renderNewProducts();
  renderSellerCards();
  renderCatalog();
  renderWishlist();
  renderCart();
  bindHeaderSearch();
  bindFilterButtons();
  bindCategoryCards();
  bindCatalogCarousel();
  bindSellerCarousel();
  bindGlobalActions();
  bindThemeToggle();
  bindOrderHistory();
  updateHeaderCounts();
  bindNewsletterForm();
  bindCheckoutForm();
  setUpRevealAnimations();
  showPageFromHash();
});

function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme === "dark" || savedTheme === "light"
    ? savedTheme
    : prefersDarkMode
      ? "dark"
      : "light";

  setTheme(theme);
}

function bindThemeToggle() {
  const themeButton = document.getElementById("themeToggle");

  themeButton.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  });
}

function setTheme(theme) {
  const isDarkMode = theme === "dark";
  document.documentElement.dataset.theme = theme;

  const themeButton = document.getElementById("themeToggle");
  themeButton.setAttribute("aria-pressed", String(isDarkMode));
  themeButton.setAttribute(
    "aria-label",
    isDarkMode ? "Switch to light mode" : "Switch to dark mode"
  );
  themeButton.title = isDarkMode ? "Switch to light mode" : "Switch to dark mode";
}

function bindHeaderSearch() {
  const searchForm = document.getElementById("headerSearchForm");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchValue = headerSearchInput.value.trim().toLowerCase();
    currentCategory = "all";
    setActiveFilterButtons();
    renderCatalog();
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
  });
}

function bindFilterButtons() {
  const buttons = document.querySelectorAll(".filter-chip");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.category;
      setActiveFilterButtons();
      renderCatalog();
    });
  });

  sortSelect.addEventListener("change", (event) => {
    currentSort = event.target.value;
    renderCatalog();
  });

  document.getElementById("clearFilters").addEventListener("click", () => {
    currentCategory = "all";
    currentSort = "popular";
    searchValue = "";
    headerSearchInput.value = "";
    sortSelect.value = "popular";
    setActiveFilterButtons();
    renderCatalog();
  });
}

function bindCategoryCards() {
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      currentCategory = card.dataset.category;
      searchValue = "";
      headerSearchInput.value = "";
      sortSelect.value = "popular";
      currentSort = "popular";
      setActiveFilterButtons();
      renderCatalog();
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function bindSellerCarousel() {
  const carousel = document.getElementById("sellerGrid");
  const previousButton = document.getElementById("sellerPrevious");
  const nextButton = document.getElementById("sellerNext");

  previousButton.addEventListener("click", () => {
    scrollSellerCarousel(carousel, -1);
  });
  nextButton.addEventListener("click", () => {
    scrollSellerCarousel(carousel, 1);
  });
  carousel.addEventListener("scroll", () => {
    updateSellerCarouselControls(carousel, previousButton, nextButton);
  });
  window.addEventListener("resize", () => {
    updateSellerCarouselControls(carousel, previousButton, nextButton);
  });

  updateSellerCarouselControls(carousel, previousButton, nextButton);
}

function bindCatalogCarousel() {
  const carousel = document.getElementById("catalogGrid");
  const previousButton = document.getElementById("catalogPrevious");
  const nextButton = document.getElementById("catalogNext");

  previousButton.addEventListener("click", () => {
    scrollProductCarousel(carousel, -1);
  });
  nextButton.addEventListener("click", () => {
    scrollProductCarousel(carousel, 1);
  });
  carousel.addEventListener("scroll", () => {
    updateSellerCarouselControls(carousel, previousButton, nextButton);
  });
  window.addEventListener("resize", () => {
    updateSellerCarouselControls(carousel, previousButton, nextButton);
  });

  updateSellerCarouselControls(carousel, previousButton, nextButton);
}

function scrollProductCarousel(carousel, direction) {
  const firstCard = carousel.querySelector(".product-card");
  if (!firstCard) return;

  const carouselStyles = getComputedStyle(carousel);
  const gap = Number.parseFloat(carouselStyles.columnGap) || 0;
  const scrollDistance = firstCard.getBoundingClientRect().width + gap;
  carousel.scrollBy({ left: scrollDistance * direction, behavior: "smooth" });
}

function scrollSellerCarousel(carousel, direction) {
  const firstCard = carousel.querySelector(".seller-card");
  if (!firstCard) return;

  const carouselStyles = getComputedStyle(carousel);
  const gap = Number.parseFloat(carouselStyles.columnGap) || 0;
  const scrollDistance = firstCard.getBoundingClientRect().width + gap;
  carousel.scrollBy({ left: scrollDistance * direction, behavior: "smooth" });
}

function updateSellerCarouselControls(carousel, previousButton, nextButton) {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  previousButton.disabled = carousel.scrollLeft <= 1;
  nextButton.disabled = carousel.scrollLeft >= maxScroll - 1;
}

function setActiveFilterButtons() {
  const buttons = document.querySelectorAll(".filter-chip");
  buttons.forEach((button) => {
    const isActive = button.dataset.category === currentCategory;
    button.classList.toggle("active", isActive);
  });
}

function bindGlobalActions() {
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    const nav = document.querySelector(".main-nav");
    const toggleButton = document.querySelector(".menu-toggle");
    const isOpen = nav.classList.toggle("open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll("[data-panel]").forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.dataset.panel;
      const panel = document.getElementById(panelId);
      if (!panel) return;
      panel.classList.add("open");
    });
  });

  document.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.dataset.close);
      if (panel) {
        panel.classList.remove("open");
      }
    });
  });

  document.getElementById("continueShopping").addEventListener("click", () => {
    cartDrawer.classList.remove("open");
  });

  document.getElementById("checkoutButton").addEventListener("click", () => {
    if (!cart.length) {
      return;
    }
    openCheckout();
  });

  document.querySelector(".modal-close").addEventListener("click", () => {
    closeProductModal();
  });

  productModalBackdrop.addEventListener("click", (event) => {
    if (event.target === productModalBackdrop) {
      closeProductModal();
    }
  });

  document.querySelectorAll("[data-close='checkoutBackdrop']").forEach((button) => {
    button.addEventListener("click", () => {
      closeCheckout();
    });
  });

  checkoutBackdrop.addEventListener("click", (event) => {
    if (event.target === checkoutBackdrop) {
      closeCheckout();
    }
  });
}

function bindOrderHistory() {
  document.querySelectorAll('a[href="#orders"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigateToPage("orders");
    });
  });

  document.querySelectorAll("[data-page='home']").forEach((button) => {
    button.addEventListener("click", () => navigateToPage("home"));
  });

  document.getElementById("trackLatestOrder").addEventListener("click", () => {
    const latestOrder = orders[orders.length - 1];
    if (latestOrder) {
      trackedOrderId = latestOrder.id;
      navigateToPage("orders");
    }
  });

  document.getElementById("orderHistoryList").addEventListener("click", (event) => {
    const trackButton = event.target.closest("[data-track-order]");
    if (!trackButton) return;

    const orderId = trackButton.dataset.trackOrder;
    const trackingMessage = document.getElementById(`tracking-${orderId}`);
    const isVisible = trackingMessage.classList.toggle("hidden") === false;
    trackButton.setAttribute("aria-expanded", String(isVisible));
  });

  window.addEventListener("hashchange", showPageFromHash);
}

function showPageFromHash() {
  const pageName = window.location.hash === "#orders"
    ? "orders"
    : window.location.hash === "#confirmation"
      ? "confirmation"
      : "home";
  showPage(pageName);
}

function navigateToPage(pageName) {
  const hash = pageName === "orders"
    ? "#orders"
    : pageName === "confirmation"
      ? "#confirmation"
      : "#top";

  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

  showPage(pageName);
}

function showPage(pageName) {
  const storefront = document.getElementById("storefrontContent");
  const orderHistoryPage = document.getElementById("orderHistoryPage");
  const confirmationPage = document.getElementById("orderConfirmationPage");
  const footer = document.querySelector(".site-footer");
  const isHome = pageName === "home";
  const isOrders = pageName === "orders";

  storefront.classList.toggle("hidden", !isHome);
  orderHistoryPage.classList.toggle("hidden", !isOrders);
  confirmationPage.classList.toggle("hidden", pageName !== "confirmation");
  footer.classList.toggle("hidden", !isHome);
  document.body.dataset.pageView = pageName;

  if (isOrders) {
    renderOrderHistory();
  } else if (pageName === "confirmation") {
    renderOrderConfirmation();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderOrderConfirmation() {
  const latestOrder = orders[orders.length - 1];
  const message = document.getElementById("confirmationMessage");
  const summary = document.getElementById("confirmationOrderSummary");
  const trackButton = document.getElementById("trackLatestOrder");

  if (!latestOrder) {
    message.textContent = "There is no recent order to show.";
    summary.innerHTML = "";
    trackButton.disabled = true;
    return;
  }

  trackButton.disabled = false;
  message.textContent = `Your demo order ${latestOrder.id} has been saved to your order history.`;
  summary.innerHTML = `
    <div class="order-summary-heading">
      <strong>Order ${escapeHTML(latestOrder.id)}</strong>
      <span>${formatOrderDate(latestOrder.createdAt)}</span>
    </div>
    <p>${latestOrder.items.reduce((count, item) => count + item.quantity, 0)} items · ${formatCurrency(latestOrder.total)}</p>
    <p>${escapeHTML(formatDeliveryAddress(latestOrder.delivery))}</p>
  `;
}

function renderOrderHistory() {
  const container = document.getElementById("orderHistoryList");

  if (!orders.length) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>No previous orders yet</h2>
        <p>When you place a demo order, it will appear here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = [...orders]
    .reverse()
    .map((order) => {
      const itemList = order.items
        .map(
          (item) => `
            <li>
              <img src="${item.image}" alt="" loading="lazy" />
              <span>${escapeHTML(item.name)} <span class="order-item-quantity">× ${item.quantity}</span></span>
              <strong>${formatCurrency(item.price * item.quantity)}</strong>
            </li>
          `
        )
        .join("");
      const shouldShowTracking = order.id === trackedOrderId;

      return `
        <article class="order-card">
          <div class="order-card-header">
            <div>
              <p class="eyebrow">Order ${escapeHTML(order.id)}</p>
              <h2>${formatOrderDate(order.createdAt)}</h2>
            </div>
            <span class="order-status">${escapeHTML(order.status)}</span>
          </div>
          <ul class="order-items">${itemList}</ul>
          <div class="order-card-details">
            <p><span>Delivering to</span><strong>${escapeHTML(formatDeliveryAddress(order.delivery))}</strong></p>
            <p><span>Payment method</span><strong>${escapeHTML(order.paymentMethod)} (demo)</strong></p>
            <p><span>Total</span><strong>${formatCurrency(order.total)}</strong></p>
          </div>
          <p class="tracking-message ${shouldShowTracking ? "" : "hidden"}" id="tracking-${escapeHTML(order.id)}">
            Demo tracking only: live courier location and delivery updates are not connected.
          </p>
          <div class="order-card-actions">
            <button class="button secondary small" type="button" data-track-order="${escapeHTML(order.id)}" aria-expanded="${shouldShowTracking}">
              Track my order
            </button>
            <button class="button primary small" type="button" data-page="home">Continue shopping</button>
          </div>
        </article>
      `;
    })
    .join("");

  container.querySelectorAll("[data-page='home']").forEach((button) => {
    button.addEventListener("click", () => navigateToPage("home"));
  });
}

function formatDeliveryAddress(delivery) {
  return [
    delivery.streetAddress,
    delivery.landmark,
    delivery.cityTown,
    delivery.lga,
    delivery.state,
  ]
    .filter(Boolean)
    .join(", ");
}

function formatOrderDate(dateValue) {
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(dateValue));
}

function escapeHTML(value) {
  const safeValue = String(value);
  return safeValue.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function bindNewsletterForm() {
  document.getElementById("newsletterForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("newsletterEmail");
    const email = emailInput.value.trim();

    if (!email || !email.includes("@")) {
      emailInput.focus();
      return;
    }

    emailInput.value = "";
    alert("Thanks for joining Cartly. You are now subscribed to our weekly style updates.");
  });
}

function bindCheckoutForm() {
  const form = document.getElementById("checkoutForm");
  const stateSelector = document.getElementById("stateName");
  stateSelector.addEventListener("change", loadLocalGovernmentAreas);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const stateName = stateSelector.value.trim();
    const lgaName = document.getElementById("lgaName").value.trim();
    const cityTown = document.getElementById("cityTown").value.trim();
    const deliveryAddress = document.getElementById("deliveryAddress").value.trim();
    const landmark = document.getElementById("landmark").value.trim();

    if (!customerName || !phoneNumber || !stateName || !lgaName || !cityTown || !deliveryAddress) {
      showCheckoutMessage("Please complete all delivery details before placing your demo order.", "error");
      return;
    }

    if (phoneNumber.replace(/\D/g, "").length < 10) {
      showCheckoutMessage("Please enter a valid phone number with at least 10 digits.", "error");
      return;
    }

    const purchasedItems = cart
      .map((cartItem) => {
        const product = products.find((entry) => entry.id === cartItem.id);
        return product ? { ...product, quantity: cartItem.quantity } : null;
      })
      .filter(Boolean);
    const subtotal = purchasedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order = {
      id: `CTL-${Date.now().toString().slice(-8)}`,
      createdAt: new Date().toISOString(),
      status: "Demo order placed",
      items: purchasedItems,
      subtotal,
      deliveryFee: DELIVERY_FEE,
      total: subtotal + DELIVERY_FEE,
      paymentMethod: form.elements.paymentMethod.value,
      customerName,
      delivery: {
        state: stateName,
        lga: lgaName,
        cityTown,
        streetAddress: deliveryAddress,
        landmark,
      },
    };

    orders.push(order);
    saveSavedItems(ORDERS_KEY, orders);

    cart = [];
    saveSavedItems(CART_KEY, cart);
    renderCart();
    updateHeaderCounts();
    closeCheckout();
    form.reset();
    document.getElementById("lgaName").replaceChildren(new Option("Select a state first", ""));
    document.getElementById("lgaName").disabled = true;
    document.getElementById("locationStatus").textContent = "Choose a state to load its current LGAs.";
    navigateToPage("confirmation");
  });
}

async function loadLocalGovernmentAreas() {
  const stateSelector = document.getElementById("stateName");
  const lgaSelector = document.getElementById("lgaName");
  const statusMessage = document.getElementById("locationStatus");
  const selectedState = stateSelector.value;
  const requestId = ++locationRequestId;

  lgaSelector.replaceChildren(new Option(selectedState ? "Loading LGAs..." : "Select a state first", ""));
  lgaSelector.disabled = true;

  if (!selectedState) {
    statusMessage.textContent = "Choose a state to load its current LGAs.";
    return;
  }

  statusMessage.textContent = `Loading Local Government Areas for ${selectedState}...`;

  let apiState = selectedState;
  if (selectedState === "Federal Capital Territory") {
    apiState = "FCT";
  } else if (selectedState === "Akwa Ibom") {
    apiState = "AkwaIbom";
  }

  try {
    const response = await fetch(
      `https://nga-states-lga.onrender.com/?state=${encodeURIComponent(apiState)}`
    );

    if (!response.ok) {
      throw new Error(`Location service returned ${response.status}.`);
    }

    const localGovernmentAreas = await response.json();
    if (requestId !== locationRequestId) return;

    if (!Array.isArray(localGovernmentAreas) || localGovernmentAreas.length === 0) {
      throw new Error("No LGA list was returned for the selected state.");
    }

    lgaSelector.replaceChildren(new Option("Select LGA", ""));
    localGovernmentAreas.forEach((lga) => {
      lgaSelector.add(new Option(lga, lga));
    });
    lgaSelector.disabled = false;
    statusMessage.textContent = `${localGovernmentAreas.length} LGAs loaded for ${selectedState}.`;
  } catch (error) {
    if (requestId !== locationRequestId) return;

    lgaSelector.replaceChildren(new Option("LGA list unavailable", ""));
    statusMessage.textContent =
      "Could not load LGAs right now. Check your internet connection and select the state again.";
    console.error("Could not load Nigerian Local Government Areas.", error);
  }
}

function showCheckoutMessage(message, type) {
  const messageBox = document.getElementById("checkoutMessage");
  messageBox.textContent = message;
  messageBox.classList.remove("success", "error");
  messageBox.classList.add(type);
}

function renderFeaturedProducts() {
  const featuredProducts = products.filter((product) => product.isFeatured).slice(0, 4);
  renderProductGrid("featuredProducts", featuredProducts);
}

function renderTrendingProducts() {
  const trendingProducts = products.filter((product) => product.isTrending).slice(0, 4);
  renderProductGrid("trendingProducts", trendingProducts);
}

function renderNewProducts() {
  const newProducts = products.filter((product) => product.isNew).slice(0, 4);
  renderProductGrid("newProducts", newProducts);
}

function renderProductGrid(elementId, productList) {
  const container = document.getElementById(elementId);
  if (!container) return;

  container.innerHTML = productList
    .map(
      (product) => `
        <article class="product-card reveal" data-product-id="${product.id}">
          ${product.originalPrice > product.price ? `<span class="discount-badge">${product.badge}</span>` : ""}
          <button class="wishlist-toggle ${isProductInWishlist(product.id) ? "active" : ""}" type="button" data-wishlist-id="${product.id}" aria-label="Add ${product.name} to wishlist">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.35-9.33-8.44C1.3 10.18 2.27 6 6.29 6c2.03 0 3.2 1.01 3.71 2.02C10.51 7.01 11.68 6 13.71 6c4.02 0 4.99 4.18 3.62 6.56C19.5 16.65 12 21 12 21Z"></path></svg>
          </button>
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-info">
            <p class="seller-name">${product.seller}</p>
            <h3 class="product-name">${product.name}</h3>
            <div class="price-line">
              <span class="price-current">${formatCurrency(product.price)}</span>
              ${product.originalPrice > product.price ? `<span class="price-old">${formatCurrency(product.originalPrice)}</span>` : ""}
            </div>
            <div class="rating-row">
              <span class="rating-badge">${product.rating}</span>
              <span>${product.stock} left</span>
            </div>
            <div class="card-actions">
              <button class="secondary-button detail-button" type="button" data-product-id="${product.id}">Details</button>
              <button class="card-button add-cart-button" type="button" data-product-id="${product.id}">Add</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  attachProductCardEvents(container);
  refreshRevealAnimations();
}

function attachProductCardEvents(container) {
  container.querySelectorAll(".wishlist-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      toggleWishlist(Number(button.dataset.wishlistId));
      const card = button.closest(".product-card");
      if (card) {
        const productId = Number(card.dataset.productId);
        const product = products.find((item) => item.id === productId);
        if (product) {
          button.classList.toggle("active", isProductInWishlist(product.id));
        }
      }
      renderWishlist();
      updateHeaderCounts();
    });
  });

  container.querySelectorAll(".detail-button").forEach((button) => {
    button.addEventListener("click", () => {
      openProductModal(Number(button.dataset.productId));
    });
  });

  container.querySelectorAll(".add-cart-button").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.productId), 1);
      const cartPanel = document.getElementById("cartDrawer");
      cartPanel.classList.add("open");
    });
  });
}

function renderCatalog() {
  const filteredProducts = getFilteredProducts();
  const previousButton = document.getElementById("catalogPrevious");
  const nextButton = document.getElementById("catalogNext");

  if (!filteredProducts.length) {
    catalogGrid.innerHTML = "";
    catalogGrid.scrollLeft = 0;
    catalogEmptyState.classList.remove("hidden");
    previousButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  catalogEmptyState.classList.add("hidden");
  catalogGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card reveal" data-product-id="${product.id}">
          ${product.originalPrice > product.price ? `<span class="discount-badge">${product.badge}</span>` : ""}
          <button class="wishlist-toggle ${isProductInWishlist(product.id) ? "active" : ""}" type="button" data-wishlist-id="${product.id}" aria-label="Add ${product.name} to wishlist">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.35-9.33-8.44C1.3 10.18 2.27 6 6.29 6c2.03 0 3.2 1.01 3.71 2.02C10.51 7.01 11.68 6 13.71 6c4.02 0 4.99 4.18 3.62 6.56C19.5 16.65 12 21 12 21Z"></path></svg>
          </button>
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-info">
            <p class="seller-name">${product.seller}</p>
            <h3 class="product-name">${product.name}</h3>
            <div class="price-line">
              <span class="price-current">${formatCurrency(product.price)}</span>
              ${product.originalPrice > product.price ? `<span class="price-old">${formatCurrency(product.originalPrice)}</span>` : ""}
            </div>
            <div class="rating-row">
              <span class="rating-badge">${product.rating}</span>
              <span>${product.stock} left</span>
            </div>
            <div class="card-actions">
              <button class="secondary-button detail-button" type="button" data-product-id="${product.id}">Details</button>
              <button class="card-button add-cart-button" type="button" data-product-id="${product.id}">Add</button>
            </div>
          </div>
        </article>
    `
    )
    .join("");

  catalogGrid.scrollLeft = 0;
  attachProductCardEvents(catalogGrid);
  refreshRevealAnimations();
  updateSellerCarouselControls(catalogGrid, previousButton, nextButton);
}

function getFilteredProducts() {
  let items = [...products];

  if (searchValue) {
    items = items.filter((item) => {
      const targetText = `${item.name} ${item.category} ${item.seller}`.toLowerCase();
      return targetText.includes(searchValue);
    });
  }

  if (currentCategory !== "all") {
    items = items.filter((item) => item.category === currentCategory);
  }

  if (currentSort === "low-high") {
    items.sort((a, b) => a.price - b.price);
  } else if (currentSort === "high-low") {
    items.sort((a, b) => b.price - a.price);
  } else if (currentSort === "newest") {
    items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else {
    items.sort((a, b) => b.rating * 10 + b.stock - (a.rating * 10 + a.stock));
  }

  return items;
}

function renderWishlist() {
  if (!wishlist.length) {
    wishlistItemsContainer.innerHTML = `
      <div class="empty-state">
        <h3>Your wishlist is empty</h3>
        <p>Save products you love and come back to them later.</p>
      </div>
    `;
    return;
  }

  const items = wishlist
    .map((productId) => products.find((product) => product.id === productId))
    .filter(Boolean);

  wishlistItemsContainer.innerHTML = items
    .map(
      (product) => `
      <div class="wishlist-item">
        <img src="${product.image}" alt="${product.name}" />
        <div class="item-details">
          <h3>${product.name}</h3>
          <p>${product.seller}</p>
          <div class="item-price">${formatCurrency(product.price)}</div>
        </div>
        <div class="item-actions">
          <button class="remove-btn" type="button" data-remove-wishlist="${product.id}">Remove</button>
          <button class="card-button add-cart-button" type="button" data-product-id="${product.id}">Add</button>
        </div>
      </div>
    `
    )
    .join("");

  wishlistItemsContainer.querySelectorAll("[data-remove-wishlist]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleWishlist(Number(button.dataset.removeWishlist));
      renderWishlist();
      updateHeaderCounts();
    });
  });

  wishlistItemsContainer.querySelectorAll(".add-cart-button").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.productId), 1);
      cartDrawer.classList.add("open");
    });
  });
}

function renderCart() {
  if (!cart.length) {
    cartItemsContainer.innerHTML = `
      <div class="empty-state">
        <h3>Your cart is empty</h3>
        <p>Add a few things to get started.</p>
      </div>
    `;
    document.getElementById("cartSubtotal").textContent = formatCurrency(0);
    document.getElementById("cartDelivery").textContent = formatCurrency(0);
    document.getElementById("cartTotal").textContent = formatCurrency(0);
    document.getElementById("checkoutButton").disabled = true;
    return;
  }

  document.getElementById("checkoutButton").disabled = false;

  const cartProducts = cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const groupedBySeller = new Map();

  cartProducts.forEach((item) => {
    if (!groupedBySeller.has(item.seller)) {
      groupedBySeller.set(item.seller, []);
    }
    groupedBySeller.get(item.seller).push(item);
  });

  const cartMarkup = Array.from(groupedBySeller.entries())
    .map(
      ([seller, items]) => `
        <div class="cart-seller-group">
          <h3>${seller}</h3>
          ${items
            .map(
              (item) => `
                <div class="cart-item">
                  <img src="${item.image}" alt="${item.name}" />
                  <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.category}</p>
                    <div class="item-price">${formatCurrency(item.price * item.quantity)}</div>
                  </div>
                  <div class="item-actions">
                    <div class="qty-control" aria-label="Quantity controls for ${item.name}">
                      <button class="qty-btn" type="button" data-qty-action="decrease" data-product-id="${item.id}">−</button>
                      <span class="qty-value">${item.quantity}</span>
                      <button class="qty-btn" type="button" data-qty-action="increase" data-product-id="${item.id}">+</button>
                    </div>
                    <button class="remove-btn" type="button" data-remove-cart="${item.id}">Remove</button>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      `
    )
    .join("");

  cartItemsContainer.innerHTML = cartMarkup;

  cartItemsContainer.querySelectorAll("[data-qty-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.productId);
      const action = button.dataset.qtyAction;
      updateQuantity(productId, action === "increase" ? 1 : -1);
    });
  });

  cartItemsContainer.querySelectorAll("[data-remove-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      removeFromCart(Number(button.dataset.removeCart));
    });
  });

  const subtotal = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  document.getElementById("cartSubtotal").textContent = formatCurrency(subtotal);
  document.getElementById("cartDelivery").textContent = formatCurrency(delivery);
  document.getElementById("cartTotal").textContent = formatCurrency(total);

  const checkoutSummaryRows = document.getElementById("checkoutSummaryRows");
  checkoutSummaryRows.innerHTML = cartProducts
    .map((item) => `<div><span>${item.name} × ${item.quantity}</span><span>${formatCurrency(item.price * item.quantity)}</span></div>`)
    .join("");

  document.getElementById("checkoutTotal").textContent = formatCurrency(total);
  document.getElementById("checkoutDeliveryFee").textContent = formatCurrency(delivery);
}

function updateHeaderCounts() {
  document.getElementById("wishlistCount").textContent = String(wishlist.length);
  document.getElementById("cartCount").textContent = String(cart.reduce((sum, item) => sum + item.quantity, 0));
}

function openProductModal(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  productModalContent.innerHTML = `
    <div class="modal-layout">
      <img src="${product.image}" alt="${product.name}" />
      <div class="modal-details">
        <p class="eyebrow">${product.category}</p>
        <h2 id="modalTitle">${product.name}</h2>
        <div class="modal-price-row">
          <strong>${formatCurrency(product.price)}</strong>
          ${product.originalPrice > product.price ? `<span class="price-old">${formatCurrency(product.originalPrice)}</span>` : ""}
        </div>
        <p class="modal-meta">Sold by ${product.seller}</p>
        <p class="modal-description">${product.description}</p>
        <p class="modal-stock">Rating: ${product.rating} · ${product.stock} items left in stock</p>

        <div class="modal-quantity">
          <span>Quantity</span>
          <div class="qty-control">
            <button class="qty-btn" type="button" id="decreaseModalQty">−</button>
            <span class="qty-value" id="modalQtyValue">1</span>
            <button class="qty-btn" type="button" id="increaseModalQty">+</button>
          </div>
        </div>

        <div class="modal-cta">
          <button class="button primary" type="button" id="modalAddToCart">Add to cart</button>
          <button class="button secondary" type="button" id="modalWishlistToggle">${isProductInWishlist(product.id) ? "Saved" : "Save"}</button>
        </div>

        <div class="related-products">
          <h3>Related products</h3>
          <div class="product-grid" style="grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem;">
            ${relatedProducts
              .map(
                (item) => `
                  <article class="product-card" style="min-width: 0;">
                    <img src="${item.image}" alt="${item.name}" />
                    <div class="product-info">
                      <p class="seller-name">${item.seller}</p>
                      <h3 class="product-name">${item.name}</h3>
                      <div class="price-line">
                        <span class="price-current">${formatCurrency(item.price)}</span>
                      </div>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  let modalQuantity = 1;

  const decreaseButton = document.getElementById("decreaseModalQty");
  const increaseButton = document.getElementById("increaseModalQty");
  const modalQtyValue = document.getElementById("modalQtyValue");

  const updateModalQuantity = () => {
    modalQtyValue.textContent = String(modalQuantity);
  };

  decreaseButton.addEventListener("click", () => {
    modalQuantity = Math.max(1, modalQuantity - 1);
    updateModalQuantity();
  });

  increaseButton.addEventListener("click", () => {
    modalQuantity += 1;
    updateModalQuantity();
  });

  document.getElementById("modalAddToCart").addEventListener("click", () => {
    addToCart(product.id, modalQuantity);
    cartDrawer.classList.add("open");
    closeProductModal();
  });

  document.getElementById("modalWishlistToggle").addEventListener("click", () => {
    toggleWishlist(product.id);
    const wishlistButton = document.getElementById("modalWishlistToggle");
    wishlistButton.textContent = isProductInWishlist(product.id) ? "Saved" : "Save";
    renderWishlist();
    updateHeaderCounts();
    renderCatalog();
    renderFeaturedProducts();
    renderTrendingProducts();
    renderNewProducts();
  });

  productModalBackdrop.classList.remove("hidden");
}

function closeProductModal() {
  productModalBackdrop.classList.add("hidden");
}

function openCheckout() {
  const subtotal = cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

  const delivery = subtotal > 0 ? DELIVERY_FEE : 0;
  document.getElementById("checkoutTotal").textContent = formatCurrency(subtotal + delivery);
  document.getElementById("checkoutDeliveryFee").textContent = formatCurrency(delivery);
  checkoutBackdrop.classList.remove("hidden");
}

function closeCheckout() {
  checkoutBackdrop.classList.add("hidden");
}

function addToCart(productId, quantity) {
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }

  saveSavedItems(CART_KEY, cart);
  renderCart();
  updateHeaderCounts();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveSavedItems(CART_KEY, cart);
  renderCart();
  updateHeaderCounts();
}

function updateQuantity(productId, change) {
  const item = cart.find((entry) => entry.id === productId);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveSavedItems(CART_KEY, cart);
  renderCart();
  updateHeaderCounts();
}

function toggleWishlist(productId) {
  const existingProduct = wishlist.includes(productId);

  if (existingProduct) {
    wishlist = wishlist.filter((id) => id !== productId);
  } else {
    wishlist.push(productId);
  }

  saveSavedItems(WISHLIST_KEY, wishlist);
  renderWishlist();
  renderCatalog();
  renderFeaturedProducts();
  renderTrendingProducts();
  renderNewProducts();
  updateHeaderCounts();
}

function isProductInWishlist(productId) {
  return wishlist.includes(productId);
}

function loadSavedItems(key) {
  const savedValue = localStorage.getItem(key);
  if (!savedValue) {
    return [];
  }

  try {
    return JSON.parse(savedValue);
  } catch (error) {
    console.warn("Saved data could not be loaded.", error);
    return [];
  }
}

function saveSavedItems(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatCurrency(amount) {
  return currencyFormatter.format(amount);
}

function setUpRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element, index) => {
    const baseDelay = Math.min(index * 60, 240);
    element.style.opacity = "0";
    element.style.transform = "translateY(24px)";
    element.style.transition = `opacity 0.75s ease ${baseDelay}ms, transform 0.75s ease ${baseDelay}ms`;
    observer.observe(element);
  });
}

function refreshRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(24px)";
    element.style.transition = "opacity 0.75s ease, transform 0.75s ease";
  });

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function renderSellerCards() {
  const target = document.getElementById("sellerGrid");
  target.innerHTML = sellers
    .map(
      (seller) => `
        <article class="seller-card reveal">
          <img class="seller-logo" src="${seller.image}" alt="${seller.name} store" loading="lazy" />
          <div class="seller-content">
            <h3>${seller.name}</h3>
            <p>${seller.description}</p>
            <div class="store-meta">
              <span class="rating-badge">${seller.rating}</span>
              <a class="store-link" href="#catalog">View store</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  refreshRevealAnimations();
}
