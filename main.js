requestIdleCallback(() => {
    // 奇数個目の句点を💖、偶数個目の句点を⭐
    let i = 0
    document.body.innerHTML = document.body.innerHTML.replaceAll("。", () => (i++, i % 2 ? "&#x1f496;" : "&#x2b50;"))

    // 奇数個目の改行を😘、偶数個目改行を🤗、
    let j = 0
    document.body.innerHTML = document.body.innerHTML.replaceAll("<br>", () => (j++, j % 2 ? "&#x1f618;<p style='margin:0;'></p>" : "&#x1f917;<p style='margin:0;'></p>"))


    // 奇数個目の読点を🐣、偶数個目の読点を🐧
    let k = 0
    document.body.innerHTML = document.body.innerHTML.replaceAll("、", () => (k++, k % 2 ? "&#x1f423;" : "&#x1f427;"))
})