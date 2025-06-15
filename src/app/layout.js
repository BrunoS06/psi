import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
      <link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&family=Fredoka:wght@300..700&family=Numans&family=Pacifico&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </header>
      <body>
        {children}
      </body>
    </html>
  );
}
