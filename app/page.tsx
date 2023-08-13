import styles from './page.module.css'


const getData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/boards');
    if (!response.ok) throw new Error("sometging went wrong");

    return response.json();

  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {

  const boards = await getData();


  return (
    <div className={styles.div}>
      Когда я добавлял больше элементов внутрь родителя-обёртки всё начинало работать как ожидалось.

      Почему так происходит?
      Причина кроется в том, что элемент с position: sticky может перемещаться только в пределах контейнера, в котором находится. А поскольку в моём случае он был единственным ребёнком, у него не было элементов-братьев, поверх которых он мог перемещаться.

      Как на самом деле работает position: sticky в CSS
      «Липкое» позиционирование состоит из двух основных частей: «липкого» элемента и «липкого» контейнера.

      «Липкий» элемент — это элемент, которому мы задали position: sticky. Элемент будет становиться плавающим, как только область видимости достигнет определённой позиции, например top: 0px.
    </div>
  )
}
