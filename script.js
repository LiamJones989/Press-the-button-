function launchTabs() {
  for (let i = 0; i < 5; i++) {
    let win = window.open('', '', `width=300,height=300,left=${Math.random()*800},top=${Math.random()*500}`);
    if (win) {
      win.document.write(`
        <html>
        <head><title>Tab ${i + 1}</title></head>
        <body style="background-color: #${Math.floor(Math.random()*16777215).toString(16)};">
          <h1>I'm tab ${i + 1}!</h1>
          <script>
            setInterval(() => {
              window.moveBy(Math.random() * 20 - 10, Math.random() * 20 - 10);
            }, 100);
          <\/script>
        </body>
        </html>
      `);
    } else {
      alert("Pop-up blocked! Please allow pop-ups for this site.");
    }
  }
}

