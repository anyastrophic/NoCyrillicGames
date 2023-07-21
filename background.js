function onUpdate(tabId, _, _) {
    chrome.tabs.query({active : true}, function (tabs) {
        const activeTabUrl = tabs[0].url;

        console.log(activeTabUrl)

        if (activeTabUrl.includes("?Keyword=") | !activeTabUrl.includes("roblox.com")) {
            return
        }
    
        chrome.scripting.executeScript({
            target: {tabId: tabId, allFrames: true},
            files: ['./removeCyrillicGames.js'],
        });
    });
}

chrome.tabs.onUpdated.addListener(onUpdate);