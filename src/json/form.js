let formsBlock_disables = {
  id: "granite-block",
  options: {
    title: "",
    addapptation_action: "/",
    description: "",
    title_font_size: "40px",
    description_font_size: "20px",
    db_action: "",
    db_object: "",
    db_id: "g_sf2dsdsf33",
    db_redirect: "",
    flash_message: "",
    form_id: "",
    button_1_label: "",
    button_1_href: "",
    submit_label: "Submit",
    cancel_label: "Cancel",
    max_width: "600px",
    enctype: "application/x-www-form-urlencoded",
    method: "POST",
    visibility_settings: "",
    hide_submit: false,
    allow_cancel: false,
    activate_recaptcha: false,
    auto_superscript: false,
    autosave: false,
    default_picklists: true,
    action: "/",
    // Step
    show_steps: false,
    step_prev_text: "Go Back",
    step_next_text: "Go Forward",

    // Section Attributes
    section_font_size: "",
    section_icon_size: "",
    section_font_color: "",
    section_background: "",
    section_line_width: "",
  },
  records: [
    {
      id: "field_name_section",
      title: "Field Settings",
      g_type: "step",
      collapsed: false,
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      children: [],
    },
  ],
};
let formsBlock = {
  id: "granite-block",
  options: {
    title: "",
    addapptation_action: "/",
    description: "",
    title_font_size: "40px",
    description_font_size: "20px",
    db_action: "",
    db_object: "",
    db_id: "g_sf2dsdsf33",
    db_redirect: "",
    flash_message: "",
    form_id: "",
    button_1_label: "",
    button_1_href: "",
    submit_label: "Submit",
    cancel_label: "Cancel",
    max_width: "600px",
    enctype: "application/x-www-form-urlencoded",
    method: "POST",
    visibility_settings: "",
    hide_submit: false,
    allow_cancel: false,
    activate_recaptcha: false,
    auto_superscript: false,
    autosave: false,
    action: "/",
    // Design
    field_bkg_color: "#4b4b4b",
    field_border_color: "#4b4b4b",
    field_border_width: "",
    // Step
    show_steps: false,
    step_prev_text: "Go Back",
    step_next_text: "Go Forward",

    // Section Attributes
    section_font_size: "",
    section_icon_size: "",
    section_font_color: "",
    section_background: "",
    section_line_width: "",
  },
  records: [
    {
      id: "Text & Icon Settings",
      title: "Text & Icon Settings",
      g_type: "step",
      collapsed: true,
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      children: [
        {
          id: "layout",
          name: "layout",
          title: "Text Alignment",
          g_type: "radio",
          required: false,
          options: "left side,center 9-0,right",
          value: "left",
          radio_style: "button",
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "test",
          name: "test",
          title: "Text Alignment",
          g_type: "radio",
          required: false,
          options: "option 1,option 2, option 3",
          value: "",
          dependency_not_blank: false,
          dependency_values: "center 9-0",
          dependency_field: "layout",
          length: null,
        },
        {
          id: "title",
          name: "title",
          title: "Title",
          g_type: "subheader",
        },
        {
          id: "header_color",
          name: "header_color",
          title: "Color",
          g_type: "color",
          required: false,
          value: "#000000",
          field_max_width: "350px",
          inline_field: "true",
          dependency_values: "",
          dependency_field: "",
        },
        {
          id: "header_size",
          name: "header_size",
          title: "Size",
          g_type: "number",
          required: false,
          value: "36",
          num_unit: "px",
        },
        {
          id: "Description",
          name: "Description",
          title: "Description",
          g_type: "subheader",
        },
        {
          id: "description_color",
          name: "description_color",
          title: "Color",
          g_type: "color",
          inline_field: "true",
        },
        {
          id: "description_size",
          name: "description_size",
          title: "Size",
          g_type: "number",
          num_unit: "px",
          required: false,
          value: "",
        },
        {
          id: "description_hover",
          name: "description_hover",
          title: "Show Description on Hover",
          g_type: "boolean",
          required: false,
          options: [["", ""]],
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "icon",
          name: "icon",
          title: "Icon",
          g_type: "subheader",
        },
        {
          id: "icon_color",
          name: "icon_color",
          title: "Icon Color",
          g_type: "color",
          display_inline: "true",
          required: false,
          value: "",
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "icon_size",
          name: "icon_size",
          title: "Size",
          g_type: "range",
          required: false,
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "icon_bottom_padding",
          name: "icon_bottom_padding",
          title: "Icon Bottom Padding",
          g_type: "range",
          required: false,
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
      ],
    },
    {
      id: "design section",
      title: "Design Settings",
      g_type: "step",
      collapsed: true,
      children: [
        {
          id: "overlay",
          name: "overlay",
          title: "Overlay",
          g_type: "subheader",
        },
        {
          id: "no_overlay",
          name: "no_overlay",
          title: "Overlay",
          switch: true,
          g_type: "boolean",
          required: false,
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "filter_one",
          name: "filter_one",
          title: "Overlay 1 Color",
          g_type: "color",
          inline_field: "true",
          required: false,
          value: "",
          dependency_values: "true",
          dependency_field: "no_overlay",
        },
        {
          id: "filter_one_opacity",
          name: "filter_one_opacity",
          title: "Overlay 1 Opacity",
          g_type: "range",
          min_number: "0",
          max_number: "100",
          range_unit: "%",
          value: "null",
          dependency_values: "true",
          dependency_field: "no_overlay",
        },
        {
          id: "filter_two",
          name: "filter_two",
          title: "Overlay 2 Color",
          g_type: "color",
          inline_field: "true",
          required: false,
          value: "",
          dependency_values: "true",
          dependency_field: "no_overlay",
        },
        {
          id: "filter_two_opacity",
          name: "filter_two_opacity",
          title: "Overlay 2 Opacity",
          g_type: "range",
          min_number: "0",
          max_number: "100",
          range_unit: "%",
          value: "",
          dependency_values: "true",
          dependency_field: "no_overlay",
        },
        {
          id: "hover",
          name: "hover",
          title: "Hover",
          g_type: "subheader",
        },
        {
          id: "hover_color",
          name: "hover_color",
          title: "Color",
          g_type: "color",
          inline_field: "true",
          required: false,
          value: "",
        },
        {
          id: "hover_opacity",
          name: "hover_opacity",
          title: "Opacity",
          g_type: "range",
          min_number: "0",
          max_number: "100",
          range_unit: "%",
          required: false,
          value: "",
        },
      ],
    },
    {
      id: "alignment_spacing",
      title: "Alignment & Spacing",
      g_type: "step",
      collapsed: true,
      children: [
        {
          id: "padding",
          name: "padding",
          title: "Spacing Between Tiles",
          g_type: "range",
          required: false,
          min_number: "0",
          max_number: "30",
          range_unit: "px",
          value: "5",
        },
        {
          id: "padding",
          title: "Padding",
          g_type: "header",
        },
        {
          id: "max_width",
          name: "max_width",
          title: "Max Width",
          g_type: "text",
          inline_field: true,
          required: false,
          options: [["", ""]],
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "alignTiles",
          name: "alignTiles",
          title: "Align Tiles",
          g_type: "radio",
          required: false,
          options: [
            ["flex-start", "Left"],
            ["center", "Center"],
            ["flex-end", "Right"],
          ],
          value: "",
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },

        {
          id: "padding_top",
          name: "padding_top",
          title: "Top",
          g_type: "range",
          min_number: "0",
          max_number: "200",
          range_unit: "px",
          inline_field: "true",
          required: false,
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "padding_bottom",
          name: "padding_bottom",
          title: "Bottom",
          g_type: "range",
          min_number: "0",
          max_number: "200",
          range_unit: "px",
          inline_field: false,
          required: false,
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "padding_left",
          name: "padding_left",
          title: "Left",
          g_type: "range",
          min_number: "0",
          max_number: "200",
          range_unit: "px",
          inline_field: "true",
          required: false,
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "padding_right",
          name: "padding_right",
          title: "Right",
          g_type: "range",
          min_number: "0",
          max_number: "200",
          range_unit: "px",
          inline_field: false,
          required: false,
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },

        {
          id: "margin",
          title: "Margin",
          g_type: "header",
        },
        {
          id: "margin_top",
          name: "margin_top",
          title: "Top",
          g_type: "range",
          min_number: "0",
          max_number: "200",
          range_unit: "px",
          inline_field: "true",
          required: false,
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "margin_bottom",
          name: "margin_bottom",
          title: "Bottom",
          g_type: "range",
          min_number: "0",
          max_number: "200",
          range_unit: "px",
          inline_field: false,
          required: false,
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "margin_left",
          name: "margin_left",
          title: "Left",
          g_type: "range",
          min_number: "0",
          max_number: "200",
          range_unit: "px",
          inline_field: "true",
          required: false,
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "margin_right",
          name: "margin_right",
          title: "Right",
          g_type: "range",
          min_number: "0",
          max_number: "200",
          range_unit: "px",
          inline_field: false,
          required: false,
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
      ],
    },
    {
      id: "pagination-filters",
      title: "Pagination & Filter Settings",
      g_type: "step",
      collapsed: true,
      children: [
        {
          id: "pagination",
          name: "pagination",
          title: "Pagination",
          g_type: "subheader",
        },
        {
          id: "pagination",
          name: "pagination",
          title: "Show Pagination",
          g_type: "boolean",
          inline_field: true,
          required: false,
          options: [["", ""]],
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "pagination_info_text",
          name: "pagination_info_text",
          title: "Show Pagination Info Text",
          g_type: "boolean",
          required: false,
          options: [["", ""]],
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "tiles_per_page",
          name: "tiles_per_page",
          title: "Tiles Per Page",
          g_type: "number",
          required: false,
          options: [["", ""]],
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },

        {
          id: "orderFilter",
          name: "orderFilter",
          title: "Enable Order By Filter",
          g_type: "boolean",
          required: false,
          options: [["", ""]],
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "search",
          name: "search",
          title: "Enable Search",
          g_type: "boolean",
          required: false,
          options: [["", ""]],
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
      ],
    },
    {
      id: "advanced-settings",
      title: "Advanced Settings",
      g_type: "step",
      collapsed: true,
      children: [
        {
          id: "classes",
          name: "classes",
          title: "Classes",
          g_type: "text",
          inline_field: "true",
          required: false,
          options: [["", ""]],
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "id",
          name: "id",
          title: "Id",
          g_type: "text",
          required: false,
          options: [["", ""]],
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
        {
          id: "visibility_settings",
          name: "visibility_settings",
          title:
            "Visibility Settings (if the below criteria is true then the block will be shown)",
          g_type: "text",
          required: false,
          options: [["", ""]],
          value: null,
          dependency_not_blank: false,
          dependency_values: null,
          dependency_field: null,
          length: null,
        },
      ],
    },
  ],
};
