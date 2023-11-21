export default function logIt(text: any) {
  if (import.meta.env.VITE_DEVELOPMENT_MODE == 'DEV') {
    console.log(text);
  }
}
