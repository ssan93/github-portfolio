import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  console.log("test", pageProps)
  return <Component {...pageProps} />
}

export default MyApp
