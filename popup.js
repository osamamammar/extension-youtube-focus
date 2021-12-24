function redirectToSubscription() {
  const homeContent = document.querySelector('ytd-browse[page-subtype="home"]');
  if (homeContent !== null) {
    window.location.replace("https://www.youtube.com/feed/subscriptions");
  } else {
    return;
  }
}
redirectToSubscription();
