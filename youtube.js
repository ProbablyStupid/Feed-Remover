

function yt_eradicate () {

  // TODO: only remove scroll feeds. Do not remove ytd-rich-grid-renderer, because this also removes channel videos pages.
  const news_feed_tag_name = "ytd-rich-grid-renderer"; 
    console.log("eradicating youtube feed...");

    eradicate_by_tag_name(news_feed_tag_name);
}