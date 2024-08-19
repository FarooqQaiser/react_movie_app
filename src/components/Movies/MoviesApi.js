const myHeaders = new Headers();
myHeaders.append(
  "x-apihub-key",
  "Zmszl2WwErhEHjglnxEDJLuTz7VRyixIvB1ltd5wAe0IpT-lzu"
);
myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "d3ee0b1f-e51c-46bc-99eb-c660726b0a1b");

export const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
