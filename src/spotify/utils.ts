import { SongPlayDataType, SongTitleArtistInputType, SongType } from './types'

export function createTitleArtistString({
  artistName,
  trackName
}: SongTitleArtistInputType): string {
  return `${trackName} by ${artistName}`
}

export function printTop10(history: SongType[]): void {
  console.log(
    history
      .slice(0, 10)
      .map(
        (song: SongType, index) =>
          `${index + 1}. ${createTitleArtistString(song)}`
      )
  )
}

export function logSong(song: SongType, index?: number) {
  const rank = index ? `${index + 1}.` : ''
  console.log(`${rank}${createTitleArtistString(song)}`)
  _logPlays(song)
}

function _logPlays({ plays }: SongType) {
  if (plays === undefined) console.error('This song has no plays listed.')
  else
    plays
      .slice(0, 10)
      .map((play: SongPlayDataType) => console.log(formatDate(play.endTime)))
}

export function printPlaysTop10(history: SongType[]): void {
  history.slice(0, 10).forEach(logSong)
}

export function formatDate(date: string): string {
  const dateObj = new Date(date)
  return `${dateObj.toLocaleString('en-US')}`
}

export function getSongFromHistoryArray(
  history: SongType[],
  find: SongType
): SongType | undefined {
  const mySong = history.find(
    (song: SongType) =>
      createTitleArtistString(song) === createTitleArtistString(find)
  )
  if (mySong === undefined)
    console.error('No song with key in this history array')
  else return mySong
}
