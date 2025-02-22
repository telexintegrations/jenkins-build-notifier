export const data = {
  data: {
    date: {
      created_at: "2025-02-21",
      updated_at: "2025-02-21",
    },
    descriptions: {
      app_description:
        "Jenkins Build Notifier to send forward all messages to telex",
      app_logo:
        "https://telexbot.samayo.com.ng/telex2telegram-alert/v1/assets/misc/alert.png",
      app_name: "Jenkins Build Notifier",
      app_url: "http://3.94.101.214:8080/",
      background_color: "##fff",
    },
    integration_category: "Monitoring & Logging",
    author: "Ali Zakariyah",
    integration_type: "output",
    is_active: true,

    key_features: [
      "Feature description 1.",
      "Feature description 2.",
      "Feature description 3.",
      "Feature description 4.",
    ],
    permissions: {
      monitoring_user: {
        always_online: true,
        display_name: "Jenkins Build Notifier",
      },
    },
    settings: [
      {
        label: "Group ID",
        type: "text",
        required: true,
        default: "#-1234567890",
      },
    ],
    target_url: "http://3.94.101.214:8080/alert/v1/api/index",
  },
};
