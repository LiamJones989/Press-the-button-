function launchTabs() {
  let count = 0;
  const maxTabs = 50;

  function openTab() {
    if (count >= maxTabs) return;

    const win = window.open('', '', `width=200,height=200,left=${Math.random() * 1000},top=${Math.random() * 600}`);
    if (win) {
      win.document.write(`
        <html>
        <head><title>Tab ${count + 1}</title></head>
        <body style="background-color: #${Math.floor(Math.random()*16777215).toString(16)}; margin:0;">
          <h1 style="text-align:center; font-size:20px;">Tab ${count + 1}</h1>
          <script>
            setInterval(() => {
              window.moveBy(Math.random() * 100 - 50, Math.random() * 100 - 50);
            }, 50);
          <\/script>
        </body>
        </html>
      `);
    } else {
      alert("Pop-up blocked! Please allow pop-ups.");
      return;
    }

    count++;
    setTimeout(openTab, 0); // Wait 0ms before opening the next
  }

  openTab(); // Start the chain
}
