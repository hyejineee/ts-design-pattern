import Iterator from "./iterator";

interface Aggregator<T> {
  iterator(): Iterator<T>; // iterator 객체를 생성해서 반환하는 메서드
}

export default Aggregator;
