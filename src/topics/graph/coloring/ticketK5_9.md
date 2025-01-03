# Билет 9. Кратность корня 0 хроматического многочлена.


## Теорема 7

Для любого графа G число 0 является корнем $\chi_G(k)$
кратности, равной количеству компонент связности
графа G.

>#### Доказательство {collapsible="true"}
> - 0 является корнем хроматического
    многочлена любого графа. Это очевидно из определения:
    правильных раскрасок в 0 цветов не бывает.
> - Ввиду Теоремы 5 достаточно доказать, что для
    связного графа G кратность корня 0 у $χ_G(k)$ равна 1.
> - Пусть v(G) = n. Индукцией по размеру графа докажем
    для связного графа G, что коэффициент при k
    многочлена $\chi_G(k)$ не равен 0 и имеет такой же знак
    как $(-1)^{n-1}$.
> База для n = 1 очевидна.
> Переход
> - Пусть G — связный граф с v(G) = $n \ge 2$, а
    для меньших графов (с меньшим количеством вершин
    или с v(G) вершинами, но меньшим количеством ребер)
    утверждение доказано.
> - Пусть $e \in E(G)$. Тогда для графов G − e и $G \cdot e$
    утверждение доказано.
> - Пусть a, b и c — коэффициенты при k у многочленов
    $\chi_G(k)$, $\chi_{G−e}(k)$ и $\chi_{G\cdot e}(k)$ соответственно.
> - По Лемме 4 тогда a = b − c.
> - Граф $G \cdot e$ связен и $v(G \cdot e)$ = n − 1, поэтому, $c \ne 0$ и
    имеет знак $(-1)^{n-2}$
> - Если граф G − e связен, то $b \ne 0$ и имеет знак $(-1)^{n-1}$
> - Если граф G − e связен, то b = 0 (так как 0 — корень
    кратности не менее 2 у $\chi_{G-e}(k)$).
> - В обоих случаях, $a \ne 0$ и имеет знак $(-1)^{n-1}$

