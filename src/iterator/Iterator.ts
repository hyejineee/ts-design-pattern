interface Iterator<T> {
  next(): boolean; // 다음 구성요소가 있다면 true, 없다면 false를 리턴하는 메서드
  current(): T;
}

export default Iterator;
