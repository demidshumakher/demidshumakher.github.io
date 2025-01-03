# Билет 42. Числа Каталана и триангуляции многоугольника. 

## Триангуляция многоугольников

### Определение
Триангуляцией многоугольника называется такое разбиение его на
треугольники, при котором любые два треугольника либо не имеют общих
точек, либо имеют ровно одну общую точку (вершину), либо имеют общую
сторону.

#### Замечание
- Триангуляцию многоугольника можно рассматривать как плоский граф.
Все его грани, кроме внешней, будут треугольниками.
- Далее мы будем рассматривать триангуляции многоугольника его
диагоналями, т. е. вершинами триангуляции будут вершины многоугольника,
а ребрами — стороны и диагонали многоугольника.
- В курсе теории графов было доказано, что в любой триангуляции
k-угольника его диагоналями участвуют ровно k − 3 диагонали,
которые разбивают k-угольник ровно на k − 2 треугольника.

### Теорема {id="t42_1"}

Количество способов триангулировать выпуклый $(n + 2)$-угольник
его диагоналями равно $c_n$

>#### Доказательство {collapsible="true"}
> Индукция по n  
> n = 0, n = 1: утверждение очевидно  
> $0, \dotsc, n \to n + 1$: Пусть $A_1 \dotsc A_{n+3}$ - выпуклый (n + 3)-угольник
> - Сторона $A_1A_{n+3}$ входит в некоторый треугольник разбиения
> - Пусть его третья вершина - $A_{m+2}$, где $0 \le m \le n$
> - Удалив $\Delta A_1A_{m+2}A_{n+3}$, получим (m+2)-угольник и (n-m+2)-угольник
> - По индукционному предположению, их можно триангулировать $c_m$ и $c_{n-m}$ способами соответственно
> - Итого, получаем
> $ \sum^n_{m=0}c_mc_{n-m} = c_{n+1}$ триангуляций

