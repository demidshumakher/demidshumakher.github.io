// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><div><strong aria-hidden="true">1.</strong> Karpov</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">1.1.</strong> Простейшие понятия</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Karpov/1_basic/1_graph.html"><strong aria-hidden="true">1.1.1.</strong> Граф, подграф. Вершина, окрестность, степень. Сумма степеней вершин графа</a></li><li class="chapter-item expanded "><a href="Karpov/1_basic/2_routes.html"><strong aria-hidden="true">1.1.2.</strong> Пути, циклы и маршруты. Лемма о выделении простого пути и цикла.</a></li><li class="chapter-item expanded "><a href="Karpov/1_basic/3_lemma.html"><strong aria-hidden="true">1.1.3.</strong> Лемма о длинном пути и цикле.</a></li><li class="chapter-item expanded "><a href="Karpov/1_basic/4_components.html"><strong aria-hidden="true">1.1.4.</strong> Компоненты связности.</a></li><li class="chapter-item expanded "><a href="Karpov/1_basic/5_tree.html"><strong aria-hidden="true">1.1.5.</strong> Дерево. Количество ребер дерева, выделение остовного дерева.</a></li><li class="chapter-item expanded "><a href="Karpov/1_basic/6_!.html"><strong aria-hidden="true">1.1.6.</strong> Единственность пути между вершинами дерева.</a></li><li class="chapter-item expanded "><a href="Karpov/1_basic/7_default.html"><strong aria-hidden="true">1.1.7.</strong> Нормальное остовное дерево.</a></li><li class="chapter-item expanded "><a href="Karpov/1_basic/8_radius.html"><strong aria-hidden="true">1.1.8.</strong> Радиус, диаметр и центр графа. Дерево поиска в ширину.</a></li><li class="chapter-item expanded "><a href="Karpov/1_basic/9_two_graph.html"><strong aria-hidden="true">1.1.9.</strong> Двудольный граф. Критерий двудольности.</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.2.</strong> Пути и циклы</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Karpov/2_cycles/1_Eyler.html"><strong aria-hidden="true">1.2.1.</strong> Эйлеров путь и цикл в графе.</a></li><li class="chapter-item expanded "><a href="Karpov/2_cycles/2_lemma.html"><strong aria-hidden="true">1.2.2.</strong> Лемма о преобразовании пути в цикл.</a></li><li class="chapter-item expanded "><a href="Karpov/2_cycles/3_Gamilton_cycle.html"><strong aria-hidden="true">1.2.3.</strong> Существование Гамильтонова пути и цикла: классические критерии Оре и Дирака.</a></li><li class="chapter-item expanded "><a href="Karpov/2_cycles/4_zamikanie.html"><strong aria-hidden="true">1.2.4.</strong> Существование Гамильтонова пути и цикла: замыкание по Хваталу.</a></li><li class="chapter-item expanded "><a href="Karpov/2_cycles/5_Chvatal.html"><strong aria-hidden="true">1.2.5.</strong> Существование Гамильтонова цикла: критерий Хватала.</a></li><li class="chapter-item expanded "><a href="Karpov/2_cycles/6_GC_in_cube.html"><strong aria-hidden="true">1.2.6.</strong> Гамильтонов цикл в кубе связного графа.</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.3.</strong> Паросочетания, независимые множества и покрытия</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Karpov/3_matchings/1_Independence.html"><strong aria-hidden="true">1.3.1.</strong> Независимые множества, паросочетания и покрытия в графе. Теорема Галлаи.</a></li><li class="chapter-item expanded "><a href="Karpov/3_matchings/2_max.html"><strong aria-hidden="true">1.3.2.</strong> Максимальное паросочетание и дополняющие пути: теорема Бержа.</a></li><li class="chapter-item expanded "><a href="Karpov/3_matchings/3_Hall.html"><strong aria-hidden="true">1.3.3.</strong> Теорема Холла.</a></li><li class="chapter-item expanded "><a href="Karpov/3_matchings/4_consequence.html"><strong aria-hidden="true">1.3.4.</strong> Следствия из теоремы Холла: паросочетания в двудольном графе, где степени одной доли больше чем другой, а также в регулярном двудольном графе.</a></li><li class="chapter-item expanded "><a href="Karpov/3_matchings/5_gareme.html"><strong aria-hidden="true">1.3.5.</strong> Теорема о гареме.</a></li><li class="chapter-item expanded "><a href="Karpov/3_matchings/6_Konig.html"><strong aria-hidden="true">1.3.6.</strong> Теорема Кёнига и ее следствие.</a></li><li class="chapter-item expanded "><a href="Karpov/3_matchings/7_pair.html"><strong aria-hidden="true">1.3.7.</strong> Паросочетания с предпочтениями. Теорема Гэйла-Шепли.</a></li><li class="chapter-item expanded "><a href="Karpov/3_matchings/8_Tutte.html"><strong aria-hidden="true">1.3.8.</strong> Теорема Татта о совершенном паросочетании.</a></li><li class="chapter-item expanded "><a href="Karpov/3_matchings/9_Petersen.html"><strong aria-hidden="true">1.3.9.</strong> Теорема Петерсена о совершенном паросочетании в регулярном графе степени 3.</a></li><li class="chapter-item expanded "><a href="Karpov/3_matchings/10_Petersen2.html"><strong aria-hidden="true">1.3.10.</strong> Теорема Петерсена о выделении 2-фактора в 2k-регулярном графе и ее следствия о регулярных факторах.</a></li><li class="chapter-item expanded "><a href="Karpov/3_matchings/11_Tomassen.html"><strong aria-hidden="true">1.3.11.</strong> Теорема Томассена о почти регулярном факторе почти регулярного графа.</a></li><li class="chapter-item expanded "><a href="Karpov/3_matchings/12_deficit.html"><strong aria-hidden="true">1.3.12.</strong> Дефицит графа. Формула Бержа.</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.4.</strong> Связность</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Karpov/4_connectivity/1_dots.html"><strong aria-hidden="true">1.4.1.</strong> Точки сочленения и блоки в связном графе. Лемма о пересечении блоков. Каждое ребро содержится в единственном блоке.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/2_tree_of_blocks.html"><strong aria-hidden="true">1.4.2.</strong> Дерево блоков и точек сочленения. Лемма о пути и теорема.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/3_edge_blocks.html"><strong aria-hidden="true">1.4.3.</strong> Крайние блоки.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/4_algorithm.html"><strong aria-hidden="true">1.4.4.</strong> Алгоритм построения блоков с помощью последовательных разрезов графа по точкам сочленения.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/5_recursive_algo.html"><strong aria-hidden="true">1.4.5.</strong> Рекурсивный алгоритм построения дерева блоков и точек сочленения.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/6_partition_2.html"><strong aria-hidden="true">1.4.6.</strong> Разбиение двусвязного графа на два связных графа заданных размеров.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/7_Menger.html"><strong aria-hidden="true">1.4.7.</strong> Теорема Менгера в форме Гёринга (для двух множеств).</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/8_consequence.html"><strong aria-hidden="true">1.4.8.</strong> Следствие — две формы теоремы Менгера (для двух вершин и для вершины и множества).</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/9_Witni.html"><strong aria-hidden="true">1.4.9.</strong> Теорема Уитни.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/10_Dirac.html"><strong aria-hidden="true">1.4.10.</strong> Теорема Дирака о цикле, содержащем заданные k вершин.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/11_lemma.html"><strong aria-hidden="true">1.4.11.</strong> Лемма о k-вершинном разделяющем множестве в k-связном графе.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/12_tight_2.html"><strong aria-hidden="true">1.4.12.</strong> Стягивание ребра в двусвязном графе без потери двусвязности.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/13_dependent.html"><strong aria-hidden="true">1.4.13.</strong> Зависимые и независимые разделяющие множества.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/14_partition_k.html"><strong aria-hidden="true">1.4.14.</strong> Разбиение k-связного графа парой независимых разделяющих множеств: лемма о компонентах.</a></li><li class="chapter-item expanded "><a href="Karpov/4_connectivity/15_tight_3.html"><strong aria-hidden="true">1.4.15.</strong> Стягивание ребра в трёхсвязном графе без потери трёхсвязности.</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.5.</strong> Раскраски</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_1.html"><strong aria-hidden="true">1.5.1.</strong> Хроматическое число, связь с числом независимости.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_2.html"><strong aria-hidden="true">1.5.2.</strong> Правильная раскраска связного графа с вершиной меньшей степени.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_3.html"><strong aria-hidden="true">1.5.3.</strong> Лемма о галочке.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_4.html"><strong aria-hidden="true">1.5.4.</strong> Теорема Брукса.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_5.html"><strong aria-hidden="true">1.5.5.</strong> Конструкция графа с произвольным хроматическим числом без треугольников.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_6.html"><strong aria-hidden="true">1.5.6.</strong> Xроматический многочлен графа.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_7.html"><strong aria-hidden="true">1.5.7.</strong> Хроматический многочлен и компоненты связности.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_8.html"><strong aria-hidden="true">1.5.8.</strong> Хроматический многочлен и блоки.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_9.html"><strong aria-hidden="true">1.5.9.</strong> Кратность корня 0 хроматического многочлена.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_10.html"><strong aria-hidden="true">1.5.10.</strong> Кратность корня 1 хроматического многочлена.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_11.html"><strong aria-hidden="true">1.5.11.</strong> Оптимальные раскраски ребер и их свойства (две леммы).</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_12.html"><strong aria-hidden="true">1.5.12.</strong> Теорема Кёнига о хроматическом индексе двудольного графа.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_13.html"><strong aria-hidden="true">1.5.13.</strong> Теорема Гупты о покрывающем индексе двудольного графа.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_14.html"><strong aria-hidden="true">1.5.14.</strong> Теорема Визинга.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_15.html"><strong aria-hidden="true">1.5.15.</strong> Списочные раскраски вершин и k-редуцируемые графы.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_16.html"><strong aria-hidden="true">1.5.16.</strong> d-раскраски. Лемма о избыточной вершине.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_17.html"><strong aria-hidden="true">1.5.17.</strong> d-раскраски. Лемма об удалении вершины с сохранением связности.</a></li><li class="chapter-item expanded "><a href="Karpov/5_colorings/ticketK5_18.html"><strong aria-hidden="true">1.5.18.</strong> Теорема Бородина о d-раскрасках.</a></li></ol></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> Pastor</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">2.1.</strong> Множества и отображения</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Pastor/1_set/1_basic.html"><strong aria-hidden="true">2.1.1.</strong> Основные понятия теории множеств: множество, элемент, подмножество. Основные операции над множествами.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/2_bin.html"><strong aria-hidden="true">2.1.2.</strong> Бинарные и n-арные отношения. Определения и примеры. Основные свойства отношений. Отношение эквивалентности. Отношение порядка.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/3_display.html"><strong aria-hidden="true">2.1.3.</strong> Понятие отображения. Образ и прообраз элемента. Инъекция, сюръекция и биекция. Композиция отображений. Обратное отображение. Критерий обратимости.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/4_decart.html"><strong aria-hidden="true">2.1.4.</strong> Число элементов декартова произведения двух и нескольких множеств. Количество подмножеств данного множества.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/5_count_od_displays.html"><strong aria-hidden="true">2.1.5.</strong> Число отображений из одного множества в другое. Число инъекций. Число перестановок данного множества. Размещения и размещения с повторениями.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/6_countable_set.html"><strong aria-hidden="true">2.1.6.</strong> Счётные множества. Определение и примеры. Счётность декартова произведения счётных множеств.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/7_infinity.html"><strong aria-hidden="true">2.1.7.</strong> Теорема о бесконечном подмножестве счётного множества. Понятие не более чем счётного множества и их основные свойства.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/8_real_nums.html"><strong aria-hidden="true">2.1.8.</strong> Счётность множества рациональных чисел.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/9_union.html"><strong aria-hidden="true">2.1.9.</strong> Теорема об объединении не более чем счётных множеств.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/10_not_countable.html"><strong aria-hidden="true">2.1.10.</strong> Пример несчётного множества. Существование трансцендентных чисел.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/11_power.html"><strong aria-hidden="true">2.1.11.</strong> Понятие мощности множества. Теорема о счётном подмножестве бесконечного множества.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/12_axiom.html"><strong aria-hidden="true">2.1.12.</strong> Формулировка аксиомы выбора. Примеры теорем, которые невозможно доказать без использования этой аксиомы.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/13_consequence.html"><strong aria-hidden="true">2.1.13.</strong> Следствия об объединении и разности бесконечного множества и счётного множества. Примеры множеств мощности континуума.</a></li><li class="chapter-item expanded "><a href="Pastor/1_set/14_compare.html"><strong aria-hidden="true">2.1.14.</strong> Сравнение мощностей. Определение, теорема Кантора-Бернштейна (формулировка), континуум-гипотеза. Теорема Кантора о мощности множества всех подмножеств.</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.2.</strong> Основы математической логики</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Pastor/2_logic/2.1 Булевы функции.html"><strong aria-hidden="true">2.2.1.</strong> Булевы функции. Определение, задание таблицей истинности, количество булевых функций от n переменных. Примеры булевых функций от 1 и 2 переменных.</a></li><li class="chapter-item expanded "><a href="Pastor/2_logic/2.2 Формулы исчисления высказываний.html"><strong aria-hidden="true">2.2.2.</strong> Формулы исчисления высказываний. Связь с булевыми функциями. Эквивалентность формул, примеры. Тавтологии, выполнимые формулы и противоречия.</a></li><li class="chapter-item expanded "><a href="Pastor/2_logic/2.3 СКНФ СДНФ.html"><strong aria-hidden="true">2.2.3.</strong> Конъюнктивные и дизъюнктивные нормальные формы. СКНФ и СДНФ. Существование и единственность представления булевой функции в виде СКНФ и СДНФ. Полные системы булевых функций.</a></li><li class="chapter-item expanded "><a href="Pastor/2_logic/2.4 Алгоритм.html"><strong aria-hidden="true">2.2.4.</strong> Алгоритм приведения булевой функции к СКНФ и СДНФ эквивалентными заменами.</a></li><li class="chapter-item expanded "><a href="Pastor/2_logic/2.5 Аксиомы.html"><strong aria-hidden="true">2.2.5.</strong> Аксиомы и правила вывода в исчислении высказываний. Пример логического вывода.</a></li><li class="chapter-item expanded "><a href="Pastor/2_logic/2.6 Язык исчисления предикатов.html"><strong aria-hidden="true">2.2.6.</strong> Язык исчисления предикатов. Термы и формулы исчисления предикатов. Свободные и связанные вхождения переменных.</a></li><li class="chapter-item expanded "><a href="Pastor/2_logic/2.7 Интерпретации.html"><strong aria-hidden="true">2.2.7.</strong> Интерпретация формул исчисления предикатов. Общезначимые и выполнимые формулы.</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.3.</strong> Элементарная комбинаторика</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Pastor/3_comb/1.html"><strong aria-hidden="true">2.3.1.</strong> Число сочетаний из n элементов по k. Формула для числа сочетаний.</a></li><li class="chapter-item expanded "><a href="Pastor/3_comb/2.html"><strong aria-hidden="true">2.3.2.</strong> Число сочетаний с повторениями из n элементов по k. Формула для числа сочетаний с повторениями.</a></li><li class="chapter-item expanded "><a href="Pastor/3_comb/3.html"><strong aria-hidden="true">2.3.3.</strong> Простейшие свойства биномиальных коэффициентов. Алгебраические и комбинаторные доказательства. Треугольник Паскаля.</a></li><li class="chapter-item expanded "><a href="Pastor/3_comb/4.html"><strong aria-hidden="true">2.3.4.</strong> Бином Ньютона. Сумма и знакопеременная сумма биномиальных коэффициентов (алгебраические и комбинаторные доказательства).</a></li><li class="chapter-item expanded "><a href="Pastor/3_comb/5.html"><strong aria-hidden="true">2.3.5.</strong> Мультиномиальные коэффициенты. Определение и формула. Обобщенный бином Ньютона.</a></li><li class="chapter-item expanded "><a href="Pastor/3_comb/6.html"><strong aria-hidden="true">2.3.6.</strong> Формула включений-исключений. Переформулировка этой формулы в терминах свойств.</a></li><li class="chapter-item expanded "><a href="Pastor/3_comb/7.html"><strong aria-hidden="true">2.3.7.</strong> Субфакториалы. Определение и рекуррентное соотношение для субфакториалов. Связь с обычными факториалами.</a></li><li class="chapter-item expanded "><a href="Pastor/3_comb/8.html"><strong aria-hidden="true">2.3.8.</strong> Явная формула для субфакториала. Следствие о ближайшем целом числе к n!/e</a></li><li class="chapter-item expanded "><a href="Pastor/3_comb/9.html"><strong aria-hidden="true">2.3.9.</strong> Функция Эйлера. Определение и формула (доказательство с помощью формулы включений-исключений).</a></li><li class="chapter-item expanded "><a href="Pastor/3_comb/10.html"><strong aria-hidden="true">2.3.10.</strong> Формула для числа сюръекций.</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.4.</strong> Разбиения чисел</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Pastor/4_partition/1.html"><strong aria-hidden="true">2.4.1.</strong> Упорядоченные инеупорядоченные разбиения. Формула для числа упорядоченных разбиений.</a></li><li class="chapter-item expanded "><a href="Pastor/4_partition/2.html"><strong aria-hidden="true">2.4.2.</strong> Упорядоченные разбиения на нечетные слагаемые.</a></li><li class="chapter-item expanded "><a href="Pastor/4_partition/3.html"><strong aria-hidden="true">2.4.3.</strong> Неупорядоченные разбиения. Связь с диаграммами Юнга. Запись в виде решений специального уравнения.</a></li><li class="chapter-item expanded "><a href="Pastor/4_partition/4.html"><strong aria-hidden="true">2.4.4.</strong> Рекуррентная формула для числа разбиений на фиксированное число слагаемых.</a></li><li class="chapter-item expanded "><a href="Pastor/4_partition/5.html"><strong aria-hidden="true">2.4.5.</strong> Явные формулы для числа разбиений на 2 и 3 слагаемых.</a></li><li class="chapter-item expanded "><a href="Pastor/4_partition/6.html"><strong aria-hidden="true">2.4.6.</strong> Формула для количества разбиений числа n на m различных слагаемых.</a></li><li class="chapter-item expanded "><a href="Pastor/4_partition/7.html"><strong aria-hidden="true">2.4.7.</strong> Пентагональная формула Эйлера.</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.5.</strong> Рекуррентные соотношения в комбинаторике</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Pastor/5_recurrent/ticketP5_1.html"><strong aria-hidden="true">2.5.1.</strong> Числа Фибоначчи. Определение и формулы суммы чисел Фибоначчи.</a></li><li class="chapter-item expanded "><a href="Pastor/5_recurrent/ticketP5_2.html"><strong aria-hidden="true">2.5.2.</strong> Числа Каталана. Определение и простейшие интерпретации (скобочные последовательности, последовательности единиц и минус единиц, пути на клетчатой сетке).</a></li><li class="chapter-item expanded "><a href="Pastor/5_recurrent/ticketP5_3.html"><strong aria-hidden="true">2.5.3.</strong> Принцип отражений. Явная формула для чисел Каталана.</a></li><li class="chapter-item expanded "><a href="Pastor/5_recurrent/ticketP5_4.html"><strong aria-hidden="true">2.5.4.</strong> Числа Каталана и триангуляции многоугольника.</a></li><li class="chapter-item expanded "><a href="Pastor/5_recurrent/ticketP5_5.html"><strong aria-hidden="true">2.5.5.</strong> Доказательство явной формулы для чисел Каталана при помощи триангуляций.</a></li><li class="chapter-item expanded "><a href="Pastor/5_recurrent/ticketP5_6.html"><strong aria-hidden="true">2.5.6.</strong> Числа Белла. Определение и рекуррентная формула.</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
