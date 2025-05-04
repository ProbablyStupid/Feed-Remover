function yts_eradicate() {
    const news_feed_tag_name = "ytd-reel-video-renderer";
    const news_feed_attribute = ['[id="shorts-container"', '[id="offline-container"]'];

    eradicate_by_tag_name(news_feed_tag_name);
    Array.from(news_feed_attribute).forEach(a => eradicate_by_attribute(a));
}
