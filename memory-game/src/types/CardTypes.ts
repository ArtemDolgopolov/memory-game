export default interface CardProps {
 cards: {
   id: number;
   name: string;
   image: string;
 }[];
 onHandleClick: (id: number) => void;
}