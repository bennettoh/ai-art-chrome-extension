export interface Product {
  tweetDate: string;
  actionDate: string;
  displayName: string;
  username: string;
  tweetUrl: string;
  mediaType: string;
  mediaUrl: string;
  savedFileName: string;
  remarks: string;
  tweetContent: string;
  replies: string;
  retweets: string;
  likes: string;
}

export type ProductProps = keyof Product;
