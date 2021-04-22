let navigationBlock = {
  id: "granite-block",
  feature: "navigation",
  options: {
    type: "sidebar",
    background: "#5557b2",
    background_opacity: "1",
    //Top Bar
    icon_top: false,
    topbar_position: "center",
    utility_font_size: "10px",
    utility_cta_background: "#D44697",
    utility_cta_background_hover: "#9a2066",
    //Logo
    header_label: "<span id='addapptation'>addapptation</span>",
    header_label_color: "white",
    logo_font_size: "24px",
    header_image: "https://addapptation.blob.core.windows.net/logo/logo.png",
    header_link: "#test",
    //Links
    font_color_hover: "darkOrange",
    background_hover: "orange",
    //Mobile
    mobile_menu_style: "bottom",
    mobile_font_size: "12px",
    mobile_bottom_cta: "true",
    mobile_bottom_icon: "", //home icon
    mobile_bottom_menu: "false",
    //Design
    divider_line_color: "#ffffff",
    hover_style: "top_border", // bottom_border, top_border, bkg_fill, font_fill

    //Font
    topbar_font_size: "14px",
    dropdown_font_size: "10px",

    mobile_menu: "top",
    font_color: "#ffffff",
    mobile_breakpoint: "550px",
    font_size: "12px",
    topbar_padding_right: "",
    topbar_padding_left: "",
    highlight: "",
    no_break_link_item: true,
    topbar_over_content: false,
    button_style: "transparentWhite",
    cta_button_padding: "",
    single_submenu: true,
    hide_mobile_nav: false,

    wrap_logo: false,
    footer: "<a href='sign-out'>Sign Out</a>",
    gradient: "",
    topbar_gradient: "",
    searching: false,
    link_label: "Sign In",
    link_url: "#",
    link_target: false,
    cta_link_left_margin: "300px",
    cta_label: "Edit",
    cta_url: "#",
    cta_target: false,
    hide_on: [],
    item_height: "65px",
    menu: false,
    use_recent_items: true,
    search_url: "search",
  },
  records: [
    {
      "link_type": "main_nav",
      "label": "About",
      "icon": "fab fa-angellist",
      "submenu_header": false,
    },
    {
      "link_type": "main_nav",
      "submenu_header": false,
      "label": "Products",
      "icon": "fab fa-amazon-pay",
    },
    {
      "link_type": "main_nav",
      "submenu": false,
      "label": "Phones",
      "icon": "fas fa-anchor"
    },
    {
      "link_type": "main_nav",
      "submenu_header": true,
      "submenu": false,
      "label": "Computers",
    },
    {
      "link_type": "main_nav",
      "label": "Team",
      "submenu": true,
      "icon": "far fa-band-aid"
    },
    {
      "link_type": "main_nav",
      "submenu": true,
      "label": "Phones",
      "icon": "fas fa-anchor"
    },
    {
      "link_type": "main_nav",
      "submenu": false,
      "label": "Tablets",
      "icon": "fas fa-anchor"
    },
    // {
    //   "link_type": "main_nav",
    //   "label": "Contact",
    //   "icon": "fab fa-app-store"
    // },
    {
      "link_type": "utility",
      "label": "Sign Up",

    },
    {
      "link_type": "utility",
      "label": "Login",
      "cta_button": "true"
    },

  ],
};