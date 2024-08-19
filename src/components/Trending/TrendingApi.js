const myHeaders = new Headers();
myHeaders.append(
  "x-apihub-key",
  "Zmszl2WwErhEHjglnxEDJLuTz7VRyixIvB1ltd5wAe0IpT-lzu"
);
myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "611cdfda-546d-4cc9-91ab-bfdac3194613");

export const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
