import React from 'react'
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Posts from '../Posts'


const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] `,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Darkfaze',
    userName: '0x23472834793848034928349284',
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9511dbb5-9be4-4651-be20-99508a7fbd79/deauqzn-8f8fc88c-175d-4fbb-9a50-de2a0d9deae6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1MTFkYmI1LTliZTQtNDY1MS1iZTIwLTk5NTA4YTdmYmQ3OVwvZGVhdXF6bi04ZjhmYzg4Yy0xNzVkLTRmYmItOWE1MC1kZTJhMGQ5ZGVhZTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HwhLKLJTp7HS0HwCudPmNMnv_DEU7erJKrYvSbOk5j8',
    text: 'sup beyatch',
    isProfileImageNft: false,
    timestamp: '2022-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Darkfaze',
    userName: '0x23472834793848034928349284',
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9511dbb5-9be4-4651-be20-99508a7fbd79/deauqzn-8f8fc88c-175d-4fbb-9a50-de2a0d9deae6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1MTFkYmI1LTliZTQtNDY1MS1iZTIwLTk5NTA4YTdmYmQ3OVwvZGVhdXF6bi04ZjhmYzg4Yy0xNzVkLTRmYmItOWE1MC1kZTJhMGQ5ZGVhZTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HwhLKLJTp7HS0HwCudPmNMnv_DEU7erJKrYvSbOk5j8',
    text: 'sup beyatch',
    isProfileImageNft: false,
    timestamp: '2022-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Darkfaze',
    userName: '0x23472834793848034928349284',
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9511dbb5-9be4-4651-be20-99508a7fbd79/deauqzn-8f8fc88c-175d-4fbb-9a50-de2a0d9deae6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1MTFkYmI1LTliZTQtNDY1MS1iZTIwLTk5NTA4YTdmYmQ3OVwvZGVhdXF6bi04ZjhmYzg4Yy0xNzVkLTRmYmItOWE1MC1kZTJhMGQ5ZGVhZTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HwhLKLJTp7HS0HwCudPmNMnv_DEU7erJKrYvSbOk5j8',
    text: 'sup beyatch',
    isProfileImageNft: false,
    timestamp: '2022-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Darkfaze',
    userName: '0x23472834793848034928349284',
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9511dbb5-9be4-4651-be20-99508a7fbd79/deauqzn-8f8fc88c-175d-4fbb-9a50-de2a0d9deae6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1MTFkYmI1LTliZTQtNDY1MS1iZTIwLTk5NTA4YTdmYmQ3OVwvZGVhdXF6bi04ZjhmYzg4Yy0xNzVkLTRmYmItOWE1MC1kZTJhMGQ5ZGVhZTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HwhLKLJTp7HS0HwCudPmNMnv_DEU7erJKrYvSbOk5j8',
    text: 'sup beyatch',
    isProfileImageNft: false,
    timestamp: '2022-06-01T12:00:00.000Z',
  },

]
export default function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet,index) => (
          <Posts
            key={index}
            displayName={tweet.displayName}
            userName={tweet.userName}
            text={tweet.text}
            avatar={tweet.avatar}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
  ))}
    </div>
  )
}
