const API_HEADERS = new Headers();
API_HEADERS.append(
  "x-apihub-key",
  "Zmszl2WwErhEHjglnxEDJLuTz7VRyixIvB1ltd5wAe0IpT-lzu"
);
API_HEADERS.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
API_HEADERS.append("x-apihub-endpoint", "ee6324b5-b074-419b-ac03-9b818d30321f");

export const API_REQUEST_OPTIONS = {
  method: "GET",
  headers: API_HEADERS,
  redirect: "follow",
};
