import "./globals.css";

export const metadata = {
  title: "GPTGenius",
  description:
    "GPTGenius: Your AI language companion. Powered by OpenAI, it enhances your conversations, content creation and more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
