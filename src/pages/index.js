import { useRouter } from 'next/router'
import Image from 'next/image'

export const getStaticProps = async () => {
  const accessToken = 'IGQVJVaVFHYmRFTzdlVnJkNnF3c2R1ODlVOFA1cUVIa1RlS2hzSm1aTzBrbXR0LWdmc1VZAdVctU2c4cTZA0NldUMWJxUDFJRFFvLXBFYVk1TENCNVlEcXp5dU0xcWg4Nmxkb1FKQVlWRlJWVUhwOTVVVAZDZD'
  const userID = '24291891907076892'
  const root = "https://graph.instagram.com/"
  
  const res = await fetch(root + userID + "/media?fields=id,caption&access_token=" + accessToken)
  const rawData = await res.json()

  var posts = [];
  for (const datum of rawData["data"]) {
    const rawMedia = await fetch(root + datum['id'] + '?fields=id,media_type,media_url,username,timestamp&access_token=' + accessToken)
    const media = await rawMedia.json()
    posts.push({
      "media": media,
      "caption": (datum.caption === undefined ? '' : datum.caption)
    })
  }
  
  return { props: { posts } }
}

export default function Page({ posts }) {
  return (
    <div>
      <div className='grid grid-cols-3 max-w-6xl bg-slate-500'>
        {/* {posts.map( (post) => (
          <div key={post["media"]["id"]}>
            <Image src={post["media"]["media_url"]} width={300} height={300}/>
          </div>
        ))} */}
        <div> 1 </div>
        <div> 2 </div>
        <div> 3 </div>
      </div>
    </div>
  )
}