import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import generateRandomHash from './generateRandomHash'

export default async function uploadImageAsync(uri: string) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = (await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => {
      resolve(xhr.response)
    })
    xhr.addEventListener('error', () => {
      reject(new TypeError('Network request failed'))
    }) 
    xhr.responseType = 'blob'
    xhr.open('GET', uri, true)
    xhr.send(null)
  })) as any
  const fileRef = ref(getStorage(), `other/${generateRandomHash()}`)
  await uploadBytes(fileRef, blob)
  // We're done with the blob, close and release it
  blob.close() 

  return getDownloadURL(fileRef)
}
