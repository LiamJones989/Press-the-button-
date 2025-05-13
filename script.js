function launchTabs() {
  for (let i = 0; i < 25; i++) {
    let win = window.open('', '', `width=200,height=200,left=${Math.random()*1000},top=${Math.random()*600}`);
    if (win) {
      win.document.write(`
        <html>
        <head><title>Tab ${i + 1}</title></head>
        <body style="background-color: #${Math.floor(Math.random()*16777215).toString(16)}; margin:0;">
          <h1 style="text-align:center; font-size:20px;">Tab ${i + 1}</h1>
          <script>
            setInterval(() => {
              window.moveBy(Math.random() * 100 - 50, Math.random() * 100 - 50);
            }, 50);
          <\/script>
        </body>
        </html>
      `);
    } else {
      alert("Pop-up blocked! Please enable pop-ups for this site.");
      break;
    }
  }
}
