import {TicketType} from "../Types/TicketType";
import {ProblemType} from "../Types/ProblemType";



export const problems_list: ProblemType[] = [
    {
        id: 81287,
        num: '1',
        is_detailed_answer: false,
        task_content: `<p>Только 57% из 23&nbsp;000&nbsp;выпускников города правильно решили задачу B9. Сколько человек правильно решили задачу B9?</p>`,
        solution_content: `<p class="left_margin">Правильно решили задачу 23&nbsp;000&nbsp;<img src="https://ege.sdamgia.ru/formula/svg/57/571ca3d7c7a5d375a429ff5a90bc5099.svg" class="tex" style="vertical-align:-1.8pt" alt=" умножить на ">&nbsp;0,57&nbsp;=&nbsp;13&nbsp;110&nbsp;учеников.</p><p>&nbsp;</p><p><span style="letter-spacing:2px ">Ответ</span>: 13&nbsp;110.</p>`,
        correct_answer: '13110',
    },
    {
        id: 513435,
        num: '2',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">На рисунке жирными точками показано суточное количество осадков, выпадавших в Якутске с 18 по 29 октября 1986 года. По горизонтали указываются числа месяца, по вертикали — количество осадков, выпавших в соответствующий день, в миллиметрах. Для наглядности жирные точки на рисунке соединены линией. Определите по рисунку, сколько дней из данного периода выпадало от 0,1 до 0,6 миллиметров осадков.</p><p><img src="https://math-ege.sdamgia.ru/get_file?id=22605" style="margin:10px auto;display:block"></p>`,
        solution_content: `<p class="left_margin">Из графика видно, что 7 дня из данного периода (18, 19, 22, 24, 26, 27, 29 октября) выпадало от 0,1 до 0,6 миллиметров осадков (см. рисунок).</p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ: 7</span> </p>`,
        correct_answer: '7'
    },
    {
        id: 250977,
        num: '3',
        is_detailed_answer: false,
        task_content: `<p class="left_margin"><img src="https://math-ege.sdamgia.ru/get_file?id=66265" style="float:right;margin:10px;max-width:100%"></p><p class="left_margin">На клетчатой бумаге с размером клетки <img src="https://ege.sdamgia.ru/formula/svg/d8/d811f1438abb6b58b15b2e5b738c18bb.svg" class="tex" style="vertical-align:-11.0pt" alt=" дробь, числитель — 1, знаменатель — корень из { Пи }см \\times дробь, числитель — 1, знаменатель — корень из { Пи }см"> изображён круг. Найдите площадь закрашенного сектора. Ответ дайте в квадратных сантиметрах.</p>`,
        solution_content: `<p class="left_margin"><img src="https://math-ege.sdamgia.ru/get_file?id=66266" style="float:right;margin:10px;max-width:100%"></p><p class="left_margin">Найдем квадрат радиуса круга <img src="https://ege.sdamgia.ru/formula/svg/57/570251ed048388b006cb3722d7c67bd9.svg" class="tex" style="vertical-align:-11.2pt" alt="R в степени 2 = левая круглая скобка дробь, числитель — 3, знаменатель — корень из { Пи } правая круглая скобка в степени 2 плюс левая круглая скобка дробь, числитель — 3, знаменатель — корень из { Пи } правая круглая скобка в степени 2 = дробь, числитель — 18, знаменатель — Пи "> см<sup>2</sup>.</p><p>&nbsp;</p><p>&nbsp;</p><p class="left_margin">Площадь фигуры равна трем восьмым площади этого круга. Поэтому</p><p class="left_margin"></p><p align="center"><img src="https://ege.sdamgia.ru/formula/svg/4f/4fde097749836bf484873e5360b2da5d.svg" class="tex" style="vertical-align:-8.5pt" alt="S= дробь, числитель — 3, знаменатель — 8 Пи {{R} в степени 2 }= дробь, числитель — 3, знаменатель — 8 Пи умножить на дробь, числитель — 18, знаменатель — Пи =6,75 "> см<sup>2</sup>.</p><p>&nbsp;</p><p><span style="letter-spacing:2px ">Ответ</span>: 6,75.</p>`,
        correct_answer: '6,75'
    },
    {
        id: 325909,
        num: '4',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">За круглый стол на 201 стул в случайном порядке рассаживаются 199 мальчиков и 2 девочки. Найдите вероятность того, что между девочками будет сидеть один мальчик.          </p>`,
        solution_content: `<p class="left_margin">Рассмотрим сидящую за столом девочку. За столом есть два места через одно от нее, на каждое из которых претендует 200 человек, из которых только одна девочка. Таким образом, вероятность, что между двумя девочками будет сидеть один мальчик равна <img src="https://ege.sdamgia.ru/formula/svg/03/039b60d5a8162a893b2df92602d6dd74.svg" class="tex" style="vertical-align:-8.5pt" alt="2 умножить на дробь, числитель — 1, знаменатель — 200 = 0,01."></p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> 0,01</p>`,
        correct_answer: '0,01'
    },
    {
        id: 13685,
        num: '5',
        is_detailed_answer: false,
        task_content: `<p>Найдите корень уравнения: <img src="https://ege.sdamgia.ru/formula/svg/fd/fd1cae1cd650f458df761a4af3f355a7.svg" class="tex" style="vertical-align:-11.2pt" alt=" левая круглая скобка дробь, числитель — 1, знаменатель — 5 правая круглая скобка в степени 4 минус x =5."></p>`,
        solution_content: `<p class="left_margin">Перейдем к одному основанию степени:</p><p align="center"><img src="https://ege.sdamgia.ru/formula/svg/d3/d34b54cff3bf7b78ff56ba5c92c0ed48.svg" class="tex" style="vertical-align:-11.2pt" alt="{{ левая круглая скобка дробь, числитель — 1, знаменатель — 5 правая круглая скобка } в степени 4 минус x }=5 равносильно {{ левая круглая скобка дробь, числитель — 1, знаменатель — 5 правая круглая скобка } в степени 4 минус x }={{ левая круглая скобка дробь, числитель — 1, знаменатель — 5 правая круглая скобка } в степени минус 1 } равносильно 4 минус x= минус 1 равносильно x=5."></p><p>&nbsp;</p><p><span style="letter-spacing:2px ">Ответ</span>: 5.</p>`,
        correct_answer: '5'
    },
    {
        id: 27750,
        num: '6',
        is_detailed_answer: false,
        task_content: `<p class="left_margin"><img src="https://ege.sdamgia.ru/get_file?id=29777" style="float:right;margin:10px"> Больший угол равнобедренного треугольника равен 98°. Найдите меньший угол. Ответ дайте в градусах.</p>`,
        solution_content: `<p class="left_margin">Углы при основании равнобедренного равны и являются острыми углами. Тогда данный в условии угол является углом при вершине, откуда </p><p class="left_margin"></p><p align="center"><img src="https://ege.sdamgia.ru/formula/svg/ec/ecd2f1d99f5293aeb97c0d436a475a26.svg" class="tex" style="vertical-align:-8.4pt" alt="\\angle A= дробь, числитель — 180{} в степени circ минус 98{} в степени circ , знаменатель — 2 =41{} в степени circ ."></p> <p>&nbsp;</p><p><span style="letter-spacing:2px ">Ответ</span>: 41.</p>`,
        correct_answer: '41'
    },
    {
        id: 124215,
        num: '7',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">Решите уравнение <img src="https://ege.sdamgia.ru/formula/svg/9c/9c2ec6a3ae6e9da059506e952ee99b90.svg" class="tex" style="vertical-align:-11.4pt" alt=" дробь, числитель — ( косинус x минус 1)(2 синус x плюс корень из { 3}), знаменатель — корень из { \\ctg x }=0."></p>`,
        solution_content: `<p class="left_margin">Найдем закон изменения скорости: </p><p align="center"><img src="https://ege.sdamgia.ru/formula/svg/e2/e2abdf906bee85e18006a7f55c2e39c6.svg" class="tex" style="vertical-align:-8.4pt" alt="v(t)={x}'(t)= дробь, числитель — 1, знаменатель — 2 {{t} в степени 2 } минус 4t минус 4."></p> Чтобы найти, в какой момент времени <i>t</i> скорость была равна 38&nbsp;м/с, решим уравнение:<p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/68/68b76ee5e69c4fd996c28261e1128c04.svg" class="tex" style="vertical-align:-14.4pt" alt=" дробь, числитель — 1, знаменатель — 2 {{t} в степени 2 } минус 4t минус 4=38 равносильно {{t} в степени 2 } минус 8t минус 84=0 равносильно совокупность выражений  новая строка t=14;  новая строка t= минус 6 конец совокупности .\\underset{t больше 0}{\\mathop{ равносильно }}t=14"> с.</p><p class="left_margin"></p></center><p class="left_margin">Следовательно, скорость точки была равна 38&nbsp;м/с на четырнадцатой секунде движения.</p><p>&nbsp;</p><p><span style="letter-spacing:2px ">Ответ</span>: 14.</p>`,
        correct_answer: '14'
    },
    {
        id: 502016,
        num: '8',
        is_detailed_answer: false,
        task_content: `<p class="left_margin"><img src="https://ege.sdamgia.ru/get_file?id=67010" style="float:right;margin:10px;max-width:100%">В прямоугольном параллелепипеде <i>ABCDA<sub>1</sub>B<sub>1</sub>C<sub>1</sub>D<sub>1</sub></i> известны длины рёбер: <i>AB</i>&nbsp;=&nbsp;9, <i>AD</i>&nbsp;=&nbsp;12 , <i>AA</i><sub>1</sub>&nbsp;=&nbsp;18. Найдите синус угла между прямыми <i>A</i><sub>1</sub><i>D</i><sub>1</sub> и <i>AC</i>.</p>`,
        solution_content: `<p class="left_margin"><img src="https://ege.sdamgia.ru/get_file?id=67011" style="float:right;margin:10px;max-width:100%"></p><p class="left_margin">Отрезок <i>A</i><sub>1</sub><i>D</i><sub>1</sub> = <i>A</i><i>D</i>. Тогда синус угла между прямыми <i>A</i><sub>1</sub><i>D</i><sub>1</sub> и <i>AC</i> равен синусу угла <img src="https://ege.sdamgia.ru/formula/svg/76/7646f2ac39cd2043f7511345c73faaff.svg" class="tex" style="vertical-align:-1.8pt" alt="\\widehat{DAC}:"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/db/dbaad4d50568d62620aa96569610104d.svg" class="tex" style="vertical-align:-10.9pt" alt=" дробь, числитель — CD, знаменатель — AC = дробь, числитель — AB, знаменатель — корень из { AB в степени 2 плюс AD в степени 2 }= дробь, числитель — 9, знаменатель — корень из { 81 плюс 144 }= дробь, числитель — 9, знаменатель — 15 =0,6."></p><p class="left_margin"></p></center><p>&nbsp;</p><p><span style="letter-spacing:2px ">Ответ:</span>0,6.</p>`,
        correct_answer: '0,6'

    },
    {
        id: 86983,
        num: '9',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">Найдите значение выражения <img src="https://ege.sdamgia.ru/formula/svg/d0/d0248c8440d6ca1650d2256880677cf3.svg" class="tex" style="vertical-align:-3.6pt" alt="(728 в степени 2 минус 26 в степени 2 ):754."></p>`,
        solution_content: `<p class="left_margin">Выполним преобразования: </p><p align="center"><img src="https://ege.sdamgia.ru/formula/svg/e3/e36b743157b7191de546718948ac2fbf.svg" class="tex" style="vertical-align:-8.4pt" alt="({{728} в степени 2 } минус {{26} в степени 2 }):754= дробь, числитель — (728 минус 26)(728 плюс 26), знаменатель — 754 = дробь, числитель — 702 умножить на 754, знаменатель — 754 =702."></p> <p>&nbsp;</p><p><span style="letter-spacing:2px ">Ответ</span>: 702.</p>`,
        correct_answer: '702'

    },
    {
        id: 518955,
        num: '10',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">Для определения эффективной температуры звёзд используют закон Стефана—Больцмана, согласно которому <img src="https://ege.sdamgia.ru/formula/svg/ea/ead0c62028b9ec8e9ff0b4959d0ea82d.svg" class="tex" style="vertical-align:-3.0pt" alt="P = \\sigma ST в степени 4 ,"> где <i>P</i>&nbsp;— мощность излучения звезды (в ваттах), <img src="https://ege.sdamgia.ru/formula/svg/6a/6ac9e4cb0d73d1f117ab049a6216c1b8.svg" class="tex" style="vertical-align:-9.5pt" alt="\\sigma =5,7 умножить на {{10} в степени минус 8 } дробь, числитель — \\text{Вт}, знаменатель — {{\\text{м } в степени 2 } умножить на {{\\text{К}} в степени 4 }}">&nbsp;— постоянная, <i>S</i>&nbsp;— площадь поверхности звезды (в квадратных метрах), а <i>T</i>&nbsp;— температура (в кельвинах). Известно, что площадь поверхности некоторой звезды равна <img src="https://ege.sdamgia.ru/formula/svg/7c/7c7f347b2d8622ecd4904b852b74c6da.svg" class="tex" style="vertical-align:-8.5pt" alt=" дробь, числитель — 1, знаменатель — 729 умножить на {{10} в степени 20 } {{\\text{м}} в степени 2 },"> а мощность её излучения равна<img src="https://ege.sdamgia.ru/formula/svg/57/57ff30ce7ee89511a4d4487c2e83a1cb.svg" class="tex" style="vertical-align:-3.0pt" alt="5,13 умножить на 10 в степени 25 "> Вт. Найдите температуру этой звезды в кельвинах.</p>`,
        solution_content: `<p class="left_margin">Выразим температуру звезды из формулы Стефана-Больцмана и найдём её:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/c2/c29997678428cf03f43666725f3be0d9.svg" class="tex" style="vertical-align:-13.0pt" alt=" T= корень из [ 4]{ дробь, числитель — P, знаменатель — \\sigma S }= корень из [ 4]{ дробь, числитель — 5,13 умножить на 10 в степени 25 умножить на 729, знаменатель — 5,7 умножить на 10 в степени минус 8 умножить на 10 в степени { 20 }}}= корень из [ 4]{ 9 в степени 4 умножить на 10 в степени 12 }=9000."></p><p class="left_margin"></p></center><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> 9000.</p>`,
        correct_answer: '9000'

    },
    {
        id: 5773,
        num: '11',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">От пристани <i>А</i> к пристани <i>В</i>, расстояние между которыми равно 176 км,  отправился с постоянной скоростью первый теплоход, а через 5 часов после этого следом за ним со скоростью на 5 км/ч большей отправился второй.  Найдите скорость второго теплохода, если в пункт <i>В</i> он прибыл одновременно с первым. Ответ дайте в км/ч.</p>`,
        solution_content: `<p class="left_margin">Пусть <img src="https://ege.sdamgia.ru/formula/svg/7b/7b774effe4a349c6dd82ad4f4f21d34c.svg" class="tex" style="vertical-align:-1.8pt" alt="u"> км/ч — скорость второго теплохода, тогда скорость первого теплохода равна <img src="https://ege.sdamgia.ru/formula/svg/9d/9daa5fe551a07945a4f1b766ee94e41f.svg" class="tex" style="vertical-align:-1.8pt" alt="u минус 5"> км/ч. Первый теплоход находился в пути на 5 часов больше, чем второй, отсюда имеем:</p><p class="left_margin"></p><p align="center"><img src="https://ege.sdamgia.ru/formula/svg/6c/6cb01bc106970607cdba083924e02532.svg" class="tex" style="vertical-align:-9.3pt" alt=" дробь, числитель — 176, знаменатель — u минус 5 минус дробь, числитель — 176, знаменатель — u =5 равносильно дробь, числитель — 880, знаменатель — {{u в степени 2 } минус 5u}=5 равносильно 176={{u} в степени 2 } минус 5u равносильно {{u} в степени 2 } минус 5u минус 176=0 равносильно "></p> <p align="center"><img src="https://ege.sdamgia.ru/formula/svg/ba/ba80726e8fcd53f30f603dc805fe9514.svg" class="tex" style="vertical-align:-14.4pt" alt=" равносильно совокупность выражений  новая строка u=16;  новая строка u= минус 11 конец совокупности .\\underset{u больше 0}{\\mathop{ равносильно }}u=16."></p> <p>&nbsp;</p><p><span style="letter-spacing:2px ">Ответ</span>: 16.</p>`,
        correct_answer: '16'

    },
    {
        id: 3865,
        num: '12',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">Найдите наибольшее значение функции <img src="https://ege.sdamgia.ru/formula/svg/ce/ce62b7b16f2b6dcda935a64a11d53e37.svg" class="tex" style="vertical-align:-3.6pt" alt="y=\\ln {{(x плюс 5)} в степени 5 } минус 5x"> на отрезке [−4,5; 0].</p>`,
        solution_content: `<p class="left_margin">Найдем производную заданной функции: </p><center><img src="https://ege.sdamgia.ru/formula/svg/4b/4b68b3694763ea3a9b0b3dda315fc61b.svg" class="tex" style="vertical-align:-9.2pt" alt="{y}'= дробь, числитель — 5, знаменатель — x плюс 5 минус 5."></center><p>&nbsp;</p><p class="left_margin">Найдем нули производной на заданном отрезке: </p><p class="left_margin"></p><center><img src="https://ege.sdamgia.ru/formula/svg/ce/cec98ce3997bcf83bf05ac4dbaacc8d9.svg" class="tex" style="vertical-align:-17.8pt" alt=" система выражений  новая строка дробь, числитель — 5, знаменатель — x плюс 5 минус 5=0,  новая строка минус 4,5 меньше или равно x меньше или равно 0 конец системы . равносильно система выражений  новая строка дробь, числитель — 1, знаменатель — x плюс 5 =1,  новая строка минус 4,5 меньше или равно x меньше или равно 0 конец системы . равносильно система выражений  новая строка x= минус 4,  новая строка минус 4,5 меньше или равно x меньше или равно 0 конец системы . равносильно x= минус 4."></center><p>&nbsp;</p><p class="left_margin">Определим знаки производной функции на заданном отрезке и изобразим на рисунке поведение функции: </p><center><p><img src="https://ege.sdamgia.ru/get_file?id=67874" style="margin:10px auto;display:block;max-width:100%"></p></center><p class="left_margin">В точке <img src="https://ege.sdamgia.ru/formula/svg/fd/fdcc4ed253108d26776eab65588e8faf.svg" class="tex" style="vertical-align:-1.8pt" alt="x= минус 4"> заданная функция имеет максимум, являющийся ее наибольшим значением на заданном отрезке. Найдем это наибольшее значение: </p><center><img src="https://ege.sdamgia.ru/formula/svg/60/606160598a73ebc22ba0d99a43c6b7a4.svg" class="tex" style="vertical-align:-3.6pt" alt="y( минус 4)=\\ln 1 плюс 5 умножить на 4=20."></center> <p>&nbsp;</p><p><span style="letter-spacing:2px ">Ответ</span>: 20.</p>`,
        correct_answer: '20'

    },
    {
        id: 511453,
        num: '13',
        is_detailed_answer: true,
        task_content: `<p class="left_margin">Решите уравнение <img src="https://ege.sdamgia.ru/formula/svg/9c/9c2ec6a3ae6e9da059506e952ee99b90.svg" class="tex" style="vertical-align:-11.4pt" alt=" дробь, числитель — ( косинус x минус 1)(2 синус x плюс корень из { 3}), знаменатель — корень из { \\ctg x }=0."></p>`,
        solution_content: `<p class="left_margin">Левая часть уравнения имеет смысл при <img src="https://ege.sdamgia.ru/formula/svg/9a/9a9f3e9de683b2607b173e992d99f6d7.svg" class="tex" style="vertical-align:-3.2pt" alt="\\ctg x больше 0."> Приравняем числитель к нулю:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/b0/b084938b2ba7dd5d9a0f12371273edef.svg" class="tex" style="vertical-align:-30.9pt" alt=" ( косинус x минус 1)(2 синус x плюс корень из { 3})=0 равносильно совокупность выражений  новая строка косинус x=1, новая строка синус x= минус дробь, числитель — корень из { 3}, знаменатель — 2 конец совокупности равносильно совокупность выражений  новая строка x=2 Пи k, новая строка x= минус дробь, числитель — Пи , знаменатель — 3 плюс 2 Пи k, новая строка x= минус дробь, числитель — 2 Пи , знаменатель — 3 плюс 2 Пи k,k принадлежит Z . конец совокупности "></p><p class="left_margin"></p></center><p class="left_margin">Учитывая условие <img src="https://ege.sdamgia.ru/formula/svg/b9/b9a489c0481799211d22ce1b6341744b.svg" class="tex" style="vertical-align:-3.0pt" alt=" синус x не равно 0,"> получаем, что числа <img src="https://ege.sdamgia.ru/formula/svg/a3/a31eafe8c95ef889589ad9a113b038d6.svg" class="tex" style="vertical-align:-3.0pt" alt="2 Пи k,k принадлежит Z "> не являются решениями данного уравнения. Учитывая условие <img src="https://ege.sdamgia.ru/formula/svg/10/1012b779fe47566da1281f4ad0e686cf.svg" class="tex" style="vertical-align:-3.2pt" alt="\\ctg x больше 0,"> получаем, что числа <img src="https://ege.sdamgia.ru/formula/svg/0d/0d17e844ea2579e4be996af894eb5b5d.svg" class="tex" style="vertical-align:-8.4pt" alt="x= минус дробь, числитель — Пи , знаменатель — 3 плюс 2 Пи k,k принадлежит Z "> не являются решениями данного уравнения. Тогда <img src="https://ege.sdamgia.ru/formula/svg/f2/f23e3395f6cd2259e4e9acc37f342a59.svg" class="tex" style="vertical-align:-8.5pt" alt="x= минус дробь, числитель — 2 Пи , знаменатель — 3 плюс 2 Пи k,k принадлежит Z ."></p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span>  <img src="https://ege.sdamgia.ru/formula/svg/72/72e94bf8fa5e426555762ad59566a555.svg" class="tex" style="vertical-align:-11.1pt" alt="\\left\\{ минус дробь, числитель — 2 Пи , знаменатель — 3 плюс 2 Пи k:k принадлежит Z \\}."></p>`,
        criteria: [
            {
                text: 'Обоснованно получены верные ответы в обоих пунктах.',
                score: 2
            },
            {
                text: 'Обоснованно получен верный ответ в пункте а), ИЛИ  получены неверные ответы из-за вычислительной ошибки, но при этом имеется верная последовательность всех шагов решения пункта а) и пункта б).',
                score: 1
            },
            {
                text: `Решение не соответствует ни одному из критериев, перечисленных выше.`,
                score: 0
            }
        ]
    },
    {
        id: 511239,
        num: '15',
        is_detailed_answer: true,
        task_content: `<p class="left_margin">Решите неравенство <img src="https://ege.sdamgia.ru/formula/svg/9c/9cdd5f9ecdb1871e75e0af42cdcfed60.svg" class="tex" style="vertical-align:-9.3pt" alt=" дробь, числитель — 2 корень из { x плюс 3}, знаменатель — x плюс 1 меньше или равно дробь, числитель — 3 корень из { x плюс 3}, знаменатель — x плюс 2 ."></p>`,
        solution_content: `<p class="left_margin">Последовательно получаем:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/f0/f059e57cebd3f4b4c7fb5a7b1cfa9d8c.svg" class="tex" style="vertical-align:-11.2pt" alt=" дробь, числитель — 2 корень из { x плюс 3}, знаменатель — x плюс 1 меньше или равно дробь, числитель — 3 корень из { x плюс 3}, знаменатель — x плюс 2 равносильно дробь, числитель — 3 корень из { x плюс 3}, знаменатель — x плюс 2 минус дробь, числитель — 2 корень из { x плюс 3}, знаменатель — x плюс 1 больше или равно 0 равносильно корень из { x плюс 3} умножить на левая круглая скобка дробь, числитель — 3, знаменатель — x плюс 2 минус дробь, числитель — 2, знаменатель — x плюс 1 правая круглая скобка больше или равно 0 равносильно "></p><p><img src="https://ege.sdamgia.ru/formula/svg/11/11d713b2b0850cec264b6100ddec0b06.svg" class="tex" style="vertical-align:-11.1pt" alt=" равносильно корень из { x плюс 3} умножить на дробь, числитель — 3x плюс 3 минус 2x минус 4, знаменатель — (x плюс 1)(x плюс 2) больше или равно 0 равносильно дробь, числитель — корень из { x плюс 3} умножить на (x минус 1), знаменатель — (x плюс 1)(x плюс 2) больше или равно 0."></p><p class="left_margin"></p></center><p class="left_margin">И решим это неравенство методом интервалов, учитывая, что <img src="https://ege.sdamgia.ru/formula/svg/8a/8a90738b5dff68c0fdb704cf96c43743.svg" class="tex" style="vertical-align:-2.3pt" alt="x больше или равно минус 3."></p><p><img src="https://ege.sdamgia.ru/get_file?id=42014" style="margin:10px auto;display:block;max-width:100%"></p><p><span style="letter-spacing: 2px;">Ответ:</span> <img src="https://ege.sdamgia.ru/formula/svg/ec/ec635117b24a6dfc74ca766d61be8087.svg" class="tex" style="vertical-align:-3.6pt" alt="\\left\\{ минус 3 \\}\\cup левая круглая скобка минус 2; минус 1 правая круглая скобка \\cup левая квадратная скобка 1; плюс принадлежит fty правая круглая скобка ."></p>`,
        criteria: [
            {
                text: 'Обоснованно получен верный ответ.',
                score: 3
            },
            {
                text: 'Обоснованно получены верные ответы в обоих неравенствах исходной системы.',
                score: 2
            },
            {
                text: 'Обоснованно получен верный ответ в одном неравенстве исходной системы. ИЛИ  получен неверный ответ из-за вычислительной ошибки, но при этом имеется верная последовательность всех шагов решения системы неравенств.',
                score: 1
            },
            {
                text: `Решение не соответствует ни одному из критериев, перечисленных выше.`,
                score: 0
            }
        ]
    },
    {
        id: 552117,
        num: '17',
        is_detailed_answer: true,
        task_content: `<div align="justify" id="body393801" class="pbody"><p class="left_margin">В июле 2019 года планируется взять кредит в банке в размере <i>S</i> тысяч рублей (<i>S</i>&nbsp;— натуральное число) сроком на 3&nbsp;года. Условия его возврата таковы:</p><p class="left_margin">— каждый январь долг увеличивается на 17,5% по сравнению с концом предыдущего года;</p><p class="left_margin">— с февраля по июнь каждого года необходимо выплатить одним платежом часть долга;</p><p class="left_margin">— в июле каждого года долг должен составлять часть кредита в соответствии с таблицей:</p><p>&nbsp;</p><p><table style="margin:auto"><tbody><tr><th style="text-align:center">Месяц и год</th><th style="text-align:center">Июль 2019</th><th style="text-align:center">Июль 2020</th><th style="text-align:center">Июль 2021</th><th style="text-align:center">Июль 2022</th></tr><tr><td style="text-align:center">Долг (в тыс. рублей)</td><td style="text-align:center"><i>S</i></td><td style="text-align:center">0,9<i>S</i></td><td style="text-align:center">0,4<i>S</i></td><td style="text-align:center">0</td></tr></tbody></table></p><p>&nbsp;</p><p class="left_margin">Найдите наименьшее значение <i>S</i>, при котором каждая из выплат будет составлять целое число тысяч рублей.</p></div>`,
        solution_content: `<p class="left_margin">Первая выплата будет составлять <img src="https://ege.sdamgia.ru/formula/svg/b1/b12f436289d59026c907e662b31d4400.svg" class="tex" style="vertical-align:-8.4pt" alt="1,175S минус 0,9S =0,275S= дробь, числитель — 275, знаменатель — 1000 S= дробь, числитель — 11, знаменатель — 40 S"> тыс. руб.</p><p class="left_margin">Вторая выплата: <img src="https://ege.sdamgia.ru/formula/svg/51/5182eff42bf8a54ae17e1ba2245844f7.svg" class="tex" style="vertical-align:-8.4pt" alt="1,175 умножить на 0,9S минус 0,4S=0,6575S= дробь, числитель — 6575, знаменатель — 10000 S= дробь, числитель — 263, знаменатель — 400 S"> тыс. руб.</p><p class="left_margin">Третья выплата: <img src="https://ege.sdamgia.ru/formula/svg/1c/1cb95a944c967f467164b8e239d1da2e.svg" class="tex" style="vertical-align:-8.5pt" alt="1,175 умножить на 0,4S минус 0=0,47S= дробь, числитель — 47, знаменатель — 100 S"> тыс. руб.</p><p class="left_margin">Наименьшее значение <i>S</i>, при котором каждая из выплат будет составлять целое число тысяч рублей, является наименьшим общим кратным чисел 40, 400 и 100, то есть числом 400.</p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> 400.</p>`,
        criteria: [
            {
                text: 'Обоснованно получен верный ответ.',
                score: 3
            },
            {
                text: 'Верно построена математическая модель, решение сведено к исследованию этой модели и получен результат: — неверный ответ из-за вычислительной ошибки;  — верный ответ, но решение недостаточно обосновано.',
                score: 2
            },
            {
                text: 'Верно построена математическая модель, решение сведено к исследованию этой модели, при этом решение может быть не завершено.',
                score: 1
            },
            {
                text: `Решение не соответствует ни одному из критериев, перечисленных выше.`,
                score: 0
            }
        ]
    }, //////////////////////////////////////////////////////////////////////////////////
    {
        id: 561163,
        num: '1',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">В квартире установлен прибор учёта расхода горячей воды (счётчик). Показания на 1 марта составляли 548&nbsp;м<sup>3</sup> воды, а 1 апреля&nbsp;— 556&nbsp;м<sup>3</sup>. Сколько нужно заплатить за горячую воду за март, если стоимость 1&nbsp;м<sup>3</sup> горячей воды составляет 191&nbsp;руб. 50&nbsp;коп.?</p>`,
        solution_content: `<p class="left_margin">Расход воды составил 556&nbsp;−&nbsp;548&nbsp;=&nbsp;8&nbsp;м<sup>3</sup>. Поэтому нужно заплатить 8&nbsp;·&nbsp; 191,5&nbsp;=&nbsp;1532 руб.</p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> 1532.</p>`,
        correct_answer: '1532',
    },
    {
        id: 561164,
        num: '2',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">На диаграмме показана среднемесячная температура воздуха в городе <i>N</i> за каждый месяц 2019 года. По горизонтали указываются месяцы, по вертикали&nbsp;— температура в градусах Цельсия. Определите по диаграмме, сколько было месяцев, когда среднемесячная температура превышала 8 градусов Цельсия?</p><p><img src="https://ege.sdamgia.ru/get_file?id=81070" style="margin:10px auto;display:block;max-width:100%"></p>`,
        solution_content: `<p class="left_margin">Из диаграммы видно, что 4 месяца среднемесячная температура превышала 8 градусов Цельсия.</p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> 4.</p>`,
        correct_answer: '4'
    },
    {
        id: 561165,
        num: '3',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">На клетчатой бумаге с размером клетки 1 × 1 отмечены две точки <i>A</i> и <i>B</i>. Найдите длину отрезка <i>AB</i>.</p><p><img src="https://math-ege.sdamgia.ru/get_file?id=81071" style="margin:10px auto;display:block;max-width:100%"></p>`,
        solution_content: `<p class="left_margin">Расстояние между точками<i> A</i> и <i>B</i> равно длине гипотенузы треугольника <i>ABC</i>, катеты которого равны 12 и 5. Поэтому искомая длина <i>AB</i> равна 13.</p><p><img src="https://math-ege.sdamgia.ru/get_file?id=81072" style="margin:10px auto;display:block;max-width:100%"></p><p>&nbsp;</p><p><span style="letter-spacing:2px ">Ответ</span>: 13.</p>`,
        correct_answer: '13'
    },
    {
        id: 561166,
        num: '4',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">Перед началом турнира по шахматам участников случайным образом разбивают на пары с помощью жребия. Всего зарегистрировано 26 шахматистов, среди которых 18 спортсменов из Санкт-Петербурга, в том числе и Алексей Журавлёв. Найдите вероятность, что Алексей Журавлёв будет играть с шахматистом из Санкт-Петербурга.</p>`,
        solution_content: `<p class="left_margin">В первом туре Алексей Журавлёв может сыграть с 18&nbsp;−&nbsp;1&nbsp;=&nbsp;17 шахматистами, из которых 26&nbsp;−&nbsp;1&nbsp;=&nbsp;25 из России. Значит, вероятность того, что в первом туре Алексей Журавлёв будет играть с каким-либо шахматистом из России, равна</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/43/43d2de3cdd4a73243b33078a169ca010.svg" class="tex" style="vertical-align:-8.5pt" alt=" дробь, числитель — 17, знаменатель — 25 =0,68."></p><p class="left_margin"></p></center><p><span style="letter-spacing: 2px;">Ответ:</span> 0,68.</p>`,
        correct_answer: '0,68'
    },
    {
        id: 561167,
        num: '5',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">Найдите корень уравнения: <img src="https://ege.sdamgia.ru/formula/svg/fd/fda9ffbfc4de01f2ebbebbb5ecd8417c.svg" class="tex" style="vertical-align:-9.7pt" alt=" корень из { дробь, числитель — 5, знаменатель — 3x минус 7 }= дробь, числитель — 1, знаменатель — 8 ."></p>`,
        solution_content: `<p class="left_margin">Возведем в квадрат:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/93/93e60c3d9fc781a6de7f510b9e91c183.svg" class="tex" style="vertical-align:-9.7pt" alt=" корень из { дробь, числитель — 5, знаменатель — 3x минус 7 }= дробь, числитель — 1, знаменатель — 8 равносильно дробь, числитель — 5, знаменатель — 3x минус 7 = дробь, числитель — 1, знаменатель — 64 равносильно 320=3x минус 7 равносильно x=109."></p><p class="left_margin"></p></center><p><span style="letter-spacing:2px ">Ответ</span>: 109.</p>`,
        correct_answer: '109'
    },
    {
        id: 561168,
        num: '6',
        is_detailed_answer: false,
        task_content: `<p class="left_margin"><img src="https://ege.sdamgia.ru/get_file?id=81074" style="float:right;margin:10px;max-width:100%"></p><p class="left_margin">В треугольнике <i>ABC</i> угол <i>B</i>&nbsp;—&nbsp;тупой, <i>AB</i>&nbsp;=&nbsp;5, <i>BC</i>&nbsp;=&nbsp;6. Найдите величину угла, противолежащего стороне<i> AC</i>, если площадь треугольника равна 7,5. Ответ дайте в градусах.</p>`,
        solution_content: `<p class="left_margin">Выразим величину угла <i>B</i> из формулы площади треугольника:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/1f/1f014bd992823741b8a80fdcdc684fc7.svg" class="tex" style="vertical-align:-8.3pt" alt="S= дробь, числитель — 1, знаменатель — 2 умножить на AB умножить на BC умножить на синус \\angle B равносильно дробь, числитель — 1, знаменатель — 2 умножить на 5 умножить на 6 умножить на синус \\angle B=7,5 равносильно синус \\angle B= дробь, числитель — 1, знаменатель — 2 равносильно \\angle B=150 в степени circ."></p><p class="left_margin"></p></center><p><span style="letter-spacing: 2px;">Ответ:</span> 150.</p>`,
        correct_answer: '150'
    },
    {
        id: 561169,
        num: '7',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">Прямая <i>y</i>&nbsp;=&nbsp;−5<i>x</i>&nbsp;+&nbsp;2 параллельна касательной к графику функции <i>y</i>&nbsp;=&nbsp;<i>x</i><sup>2</sup>&nbsp;+&nbsp;5<i>x</i>&nbsp;+&nbsp;3. Найдите абсциссу точки касания.</p>`,
        solution_content: `<p class="left_margin">Значение производной в точке касания равно угловому коэффициенту касательной. Поскольку касательная параллельна прямой <img src="https://ege.sdamgia.ru/formula/svg/2d/2d9e9c5b1f03485166892e29863c7973.svg" class="tex" style="vertical-align:-3.0pt" alt="y= минус 5x плюс 2"> их угловые коэффициенты равны. Поэтому абсцисса точки касания находится из уравнения <img src="https://ege.sdamgia.ru/formula/svg/f6/f63c7688169ae24929122c46b20fc1a9.svg" class="tex" style="vertical-align:-3.0pt" alt="{y}'= минус 5">:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/3e/3e96ad41075222835f756b0559a89e23.svg" class="tex" style="vertical-align:-3.6pt" alt="(x в степени 2 плюс 5x плюс 3)'= минус 5 равносильно 2x плюс 5= минус 5 равносильно x= минус 5."></p><p class="left_margin"></p></center><p><span style="letter-spacing: 2px;">Ответ:</span> −5.</p>`,
        correct_answer: '-5'
    },
    {
        id: 561170,
        num: '8',
        is_detailed_answer: false,
        task_content: `<p class="left_margin"><img src="https://ege.sdamgia.ru/get_file?id=29802" style="float:right;margin:10px"></p><p class="left_margin">Во сколько раз увеличится объём конуса, если радиус его основания увеличится в 4 раза, а высота останется прежней?</p>`,
        solution_content: `<p class="left_margin">Объем конуса равен </p><p class="left_margin"></p><p align="center"><img src="https://ege.sdamgia.ru/formula/svg/6b/6b5160622a2e8c58a72e26712957a420.svg" class="tex" style="vertical-align:-8.5pt" alt="V= дробь, числитель — 1, знаменатель — 3 Sh= дробь, числитель — 1, знаменатель — 3 Пи {{r} в степени 2 }h">,</p> где &nbsp;<img src="https://ege.sdamgia.ru/formula/svg/5d/5dbc98dcc983a70728bd082d1a47546e.svg" class="tex" style="vertical-align:-1.8pt" alt="S">&nbsp;— площадь основания, &nbsp;<img src="https://ege.sdamgia.ru/formula/svg/25/2510c39011c5be704182423e3a695e91.svg" class="tex" style="vertical-align:-1.8pt" alt="h">&nbsp;—высота конуса, а &nbsp;<img src="https://ege.sdamgia.ru/formula/svg/4b/4b43b0aee35624cd95b910189b3dc231.svg" class="tex" style="vertical-align:-1.8pt" alt="r">&nbsp;— радиус основания. При увеличении радиуса основания в 4 раза объем конуса увеличится в 16 раз. <p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> 16.</p>`,
        correct_answer: '16'

    },
    {
        id:  561171,
        num: '9',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">Вычислите <img src="https://ege.sdamgia.ru/formula/svg/bf/bffb15a8a08330722f80ffaa78d01220.svg" class="tex" style="vertical-align:-3.7pt" alt=" логарифм по основанию 3 27 умножить на логарифм по основанию 5 625."></p>`,
        solution_content: `<p class="left_margin">Выполним преобразования: </p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/c7/c7049abd84a8c10b4c9d50c1a7723ca5.svg" class="tex" style="vertical-align:-3.7pt" alt="{{\\log }_{3}}27 умножить на ({{\\log }_{5}}625) = 3 умножить на 4=12."></p><p class="left_margin"></p></center><p><span style="letter-spacing: 2px;">Ответ:</span> 12.</p>`,
        correct_answer: '12'

    },
    {
        id: 561172,
        num: '10',
        is_detailed_answer: false,
        task_content: `<p>Небольшой мячик бросают под острым углом <img src="https://ege.sdamgia.ru/formula/svg/7b/7b7f9dbfea05c83784f8b85149852f08.svg" class="tex" style="vertical-align:-1.8pt" alt="\\alpha"> к плоской горизонтальной поверхности земли.  Расстояние, которое пролетает мячик, вычисляется по формуле <img src="https://ege.sdamgia.ru/formula/svg/ef/efbed0ba7469d11ace3ef5604864c67e.svg" class="tex" style="vertical-align:-10.5pt" alt="S= дробь, числитель — {v_0 в степени 2 }, знаменатель — g синус 2\\alpha">&nbsp;(м), где <img src="https://ege.sdamgia.ru/formula/svg/fa/fad7117ba4e4d5e67c4a61a3f71dae1d.svg" class="tex" style="vertical-align:-2.6pt" alt="v_0=8">&nbsp;м/с&nbsp;— начальная скорость мячика, а <img src="https://ege.sdamgia.ru/formula/svg/b2/b2f5ff47436671b6e533d8dc3614845d.svg" class="tex" style="vertical-align:-3.0pt" alt="g">&nbsp;— ускорение свободного падения (считайте  <img src="https://ege.sdamgia.ru/formula/svg/11/112f48e4093c514cc217aced1a5dfb3b.svg" class="tex" style="vertical-align:-3.0pt" alt="g=10">&nbsp;м/с<img src="https://ege.sdamgia.ru/formula/svg/02/02850d6a647bc6cdb7f44baeb1f90089.svg" class="tex" style="vertical-align:-1.8pt" alt="{} в степени 2 ">). При каком наименьшем значении угла (в&nbsp;градусах) мячик перелетит реку шириной 3,2&nbsp;м?</p>`,
        solution_content: `<p class="left_margin">Задача сводится к решению неравенства <img src="https://ege.sdamgia.ru/formula/svg/86/86d8107005527dc51f109f6217a1f53b.svg" class="tex" style="vertical-align:-3.0pt" alt="S больше или равно 3,2"> на интервале <img src="https://ege.sdamgia.ru/formula/svg/39/3986c1441b27156d37a1ff92896f501f.svg" class="tex" style="vertical-align:-3.6pt" alt="(0{} в степени circ ;90{} в степени circ )"> при заданных значениях начальной скорости <img src="https://ege.sdamgia.ru/formula/svg/2c/2c9561a20f58ede0578197de39c78e70.svg" class="tex" style="vertical-align:-3.6pt" alt="{{v}_{0}}=8\\text{м/с}"> и ускорения свободного падения <img src="https://ege.sdamgia.ru/formula/svg/7c/7ce42e8e23c1458d0b81d0ece7e6abc1.svg" class="tex" style="vertical-align:-3.6pt" alt="g=10\\text{м/}{{\\text{с}} в степени 2 }">:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/e6/e64d7b98dc82192c485c41ce7ce53153.svg" class="tex" style="vertical-align:-8.5pt" alt=" дробь, числитель — {{8} в степени 2 }, знаменатель — 10 синус 2\\alpha больше или равно 3,2 равносильно синус 2\\alpha больше или равно дробь, числитель — 1, знаменатель — 2 равносильно "></p> <p align="center"><img src="https://ege.sdamgia.ru/formula/svg/e7/e751105067c395b907fd04306a4ac31b.svg" class="tex" style="vertical-align:-8.4pt" alt=" равносильно {{30} в степени \\circ } плюс {{360} в степени \\circ }n меньше или равно 2\\alpha меньше или равно {{150} в степени \\circ } плюс {{360} в степени \\circ }n\\underset{0{} в степени circ меньше 2\\alpha меньше 180{} в степени circ }{\\mathop{ равносильно }}"></p> <p align="center"><img src="https://ege.sdamgia.ru/formula/svg/b3/b3aeffb8bf5fc622cb8803e254d3573f.svg" class="tex" style="vertical-align:-8.4pt" alt="\\underset{0{} в степени circ меньше 2\\alpha меньше 180{} в степени circ }{\\mathop{ равносильно }}30{} в степени circ меньше или равно 2\\alpha меньше или равно 150{} в степени circ \\underset{0{} в степени circ меньше \\alpha меньше 90{} в степени circ }{\\mathop{ равносильно }}{{15} в степени \\circ } меньше или равно \\alpha меньше или равно {{75} в степени \\circ }."></p><p class="left_margin"></p></center><p class="left_margin">Таким образом, наименьший угол, при котором мячик перелетит через реку, равен 15 градусам.</p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> 15.</p>`,
        correct_answer: '15'

    },
    {
        id: 561173,
        num: '11',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">Из пункта <i>А</i> и пункт <i>В</i>, расстояние между которыми 72 км, одновременно выехали мотоциклист и велосипедист. Известно, что за час мотоциклист проезжает на 18 км больше, чем велосипедист. Найдите скорость велосипедиста, если известно, что он прибыл в пункт <i>В</i> на 2 часа позже мотоциклиста. Ответ дайте в км/ч.</p>`,
        solution_content: `<p class="left_margin">Пусть <img src="https://ege.sdamgia.ru/formula/svg/9e/9e3669d19b675bd57058fd4664205d2a.svg" class="tex" style="vertical-align:-1.8pt" alt="v"> км/ч – скорость велосипедиста, тогда скорость мотоциклиста равна <img src="https://ege.sdamgia.ru/formula/svg/bc/bc86f35706ac96a200794ed471f0a5c5.svg" class="tex" style="vertical-align:-1.8pt" alt="v плюс 18"> км/ч. Велосипедист был в пути на 2 часа больше, отсюда имеем: </p><p class="left_margin"></p><center><img src="https://ege.sdamgia.ru/formula/svg/4e/4e05bfaec2bc889b516131daeb6c12b6.svg" class="tex" style="vertical-align:-14.4pt" alt=" дробь, числитель — 72, знаменатель — v минус дробь, числитель — 72, знаменатель — v плюс 18 =2 равносильно дробь, числитель — 72 умножить на 18, знаменатель — v(v плюс 18) =2\\underset{v больше 0}{\\mathop{ равносильно }}72 умножить на 9=v(v плюс 18) равносильно {{v} в степени 2 } плюс 18v минус 648=0 равносильно совокупность выражений v=18; v= минус 36 конец совокупности .\\underset{v больше 0}{\\mathop{ равносильно }}v=18."><p class="left_margin"></p></center><p class="left_margin">Таким образом, скорость велосипедиста была равна 18&nbsp;км/ч. </p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> 18.</p>`,
        correct_answer: '18'

    },
    {
        id: 561174,
        num: '12',
        is_detailed_answer: false,
        task_content: `<p class="left_margin">Найдите точку минимума функции <img src="https://ege.sdamgia.ru/formula/svg/7d/7d6c3b1c8d263fa227fdfe256e81c13d.svg" class="tex" style="vertical-align:-3.6pt" alt="y=(x в степени 2 плюс 12x плюс 12)e в степени x плюс 12 ."></p>`,
        solution_content: `<p class="left_margin">Найдем производную заданной функции: </p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/10/108f5b923d45d2e964d847865b6630b7.svg" class="tex" style="vertical-align:-3.6pt" alt="{y}'=(x в степени 2 плюс 12x плюс 12{)}'{{e} в степени x плюс 12 } плюс (x в степени 2 плюс 12x плюс 12)({{e} в степени x плюс 12 }{)}'="></p><p><img src="https://ege.sdamgia.ru/formula/svg/20/206a777ed07cd70390138475ee3d3b6d.svg" class="tex" style="vertical-align:-3.6pt" alt="=(2x плюс 12){{e} в степени x плюс 12 } плюс (x в степени 2 плюс 12x плюс 12){{e} в степени x плюс 12 }=(x в степени 2 плюс 14x плюс 24){{e} в степени x плюс 12 }."></p><p class="left_margin"></p></center><p class="left_margin">Найдем нули производной: </p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/9b/9b57d1ac3cda5e219f56a36edb1c7050.svg" class="tex" style="vertical-align:-14.4pt" alt="(x в степени 2 плюс 14x плюс 24){{e} в степени x плюс 12 }=0 равносильно совокупность выражений x= минус 2, x= минус 12. конец совокупности "></p><p class="left_margin"></p></center><p class="left_margin">Определим знаки производной функции и изобразим на рисунке поведение функции:</p><p><img src="https://ege.sdamgia.ru/get_file?id=81077" style="margin:10px auto;display:block;max-width:100%"></p><p class="left_margin">Искомая точка минимума <img src="https://ege.sdamgia.ru/formula/svg/60/60397d20d57a4f844fd21638064762fd.svg" class="tex" style="vertical-align:-1.8pt" alt="x= минус 2."></p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> −2.</p>`,
        correct_answer: '-2'
    },
    {
        id: 561175,
        num: '13',
        is_detailed_answer: true,
        task_content: `<p class="left_margin">а) Решите уравнение <img src="https://ege.sdamgia.ru/formula/svg/ef/efb7f4ceab695d290c63f593cac082de.svg" class="tex" style="vertical-align:-3.6pt" alt=" тангенс x(\\ctg x минус косинус x)=2 синус в степени 2 x."></p><p class="left_margin">б) Найдите все корни этого уравнения, принадлежащие отрезку <img src="https://ege.sdamgia.ru/formula/svg/3f/3fc278631dfee1bdb99088163ce5aa3b.svg" class="tex" style="vertical-align:-11.1pt" alt=" левая квадратная скобка минус дробь, числитель — 5 Пи , знаменатель — 2 ; минус Пи правая квадратная скобка ."></p>`,
        solution_content: `<p class="left_margin"><img src="https://ege.sdamgia.ru/get_file?id=81110" style="float:right;margin:10px;max-width:100%"></p><p class="left_margin">а) Запишем исходное уравнение в виде:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/ba/ba1998dbdcb8894f93bfc18f06c17c27.svg" class="tex" style="vertical-align:-24.9pt" alt=" тангенс x(\\ctg x минус косинус x)=2 синус в степени 2 x равносильно система выражений 2 синус в степени 2 x плюс синус x минус 1=0, косинус x не равно 0 конец системы . равносильно система выражений совокупность выражений синус x= дробь, числитель — 1, знаменатель — 2 , синус x= минус 1. конец системы ., косинус x не равно 0 конец совокупности . "></p><p class="left_margin"></p></center><p class="left_margin">Корни уравнения <img src="https://ege.sdamgia.ru/formula/svg/e0/e076298e3369a54ee0bb02aceb0049a3.svg" class="tex" style="vertical-align:-1.8pt" alt=" синус x= минус 1"> не удовлетворяют условию <img src="https://ege.sdamgia.ru/formula/svg/81/8158895ee006cc0e8a32c2d13c8661d0.svg" class="tex" style="vertical-align:-3.0pt" alt=" косинус x не равно 0."> Тогда получаем:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/90/9064210ea8fd008c6e0a0806b82327f3.svg" class="tex" style="vertical-align:-21.5pt" alt=" синус x= дробь, числитель — 1, знаменатель — 2 равносильно совокупность выражений x= дробь, числитель — Пи , знаменатель — 6 плюс 2 Пи k,x= дробь, числитель — 5 Пи , знаменатель — 6 плюс 2 Пи k, конец совокупности . k принадлежит Z ."></p><p class="left_margin"></p></center><p class="left_margin">б) Отберём корни, принадлежащие промежутку <img src="https://ege.sdamgia.ru/formula/svg/46/46f6c43e73e43d82973f7f0076425821.svg" class="tex" style="vertical-align:-11.1pt" alt=" левая квадратная скобка минус дробь, числитель — 5 Пи , знаменатель — 2 ; минус Пи правая квадратная скобка ,"> с помощью единичной окружности. Получаем <img src="https://ege.sdamgia.ru/formula/svg/7f/7fd4a5a97b39682536f33790bf61566e.svg" class="tex" style="vertical-align:-8.5pt" alt=" минус дробь, числитель — 11 Пи , знаменатель — 6 ,"> <img src="https://ege.sdamgia.ru/formula/svg/af/af1210312809f68a1a0e8bacf06c7b5b.svg" class="tex" style="vertical-align:-8.5pt" alt=" минус дробь, числитель — 7 Пи , знаменатель — 6 ."></p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> а) <img src="https://ege.sdamgia.ru/formula/svg/5d/5d965de2357f0639446bcb0109165a6d.svg" class="tex" style="vertical-align:-11.1pt" alt="\\left\\{ дробь, числитель — Пи , знаменатель — 6 плюс 2 Пи k; дробь, числитель — 5 Пи , знаменатель — 6 плюс 2 Пи k:k принадлежит Z .\\};"> б) <img src="https://ege.sdamgia.ru/formula/svg/7f/7fd4a5a97b39682536f33790bf61566e.svg" class="tex" style="vertical-align:-8.5pt" alt=" минус дробь, числитель — 11 Пи , знаменатель — 6 ,"> <img src="https://ege.sdamgia.ru/formula/svg/af/af1210312809f68a1a0e8bacf06c7b5b.svg" class="tex" style="vertical-align:-8.5pt" alt=" минус дробь, числитель — 7 Пи , знаменатель — 6 ."></p>`,
        criteria: [
            {
                text: 'Обоснованно получены верные ответы в обоих пунктах.',
                score: 2
            },
            {
                text: 'Обоснованно получен верный ответ в пункте а), ИЛИ  получены неверные ответы из-за вычислительной ошибки, но при этом имеется верная последовательность всех шагов решения пункта а) и пункта б).',
                score: 1
            },
            {
                text: `Решение не соответствует ни одному из критериев, перечисленных выше.`,
                score: 0
            }
        ]
    },
    {
        id: 561176,
        num: '14',
        is_detailed_answer: true,
        task_content: `<p class="left_margin">В правильной треугольной призме <i>ABCA</i><sub>1</sub><i>B</i><sub>1</sub><i>C</i><sub>1</sub> сторона основания равна 6, а боковое ребро равно 5. На ребрах <i>AA</i><sub>1</sub> и <i>A</i><sub>1</sub><i>C</i><sub>1</sub> выбраны точки <i>M</i> и <i>N</i> соответственно так, что <i>AM</i>&nbsp;=&nbsp;<i>A</i><sub>1</sub><i>N</i>&nbsp;=&nbsp;2.</p><p class="left_margin">а) Докажите, что прямые <i>BM</i> и <i>MN</i> перпендикулярны.</p><p class="left_margin">б) Найдите угол между плоскостями <i>BMN</i> и <i>ACC</i><sub>1</sub>.</p>`,
        solution_content: `<p class="left_margin"><img src="https://ege.sdamgia.ru/get_file?id=81079" style="float:right;margin:10px;max-width:100%"></p><p class="left_margin">а) Пусть <i>H</i>&nbsp;— середина <i>AC</i>, тогда прямая <i>BH</i> перпендикулярна прямой <i>AC</i> по свойству равностороннего треугольника, прямая <i>BH</i> перпендикулярна <i>AA</i><sub>1</sub> по свойству правильной призмы, таким образом, прямая <i>BH</i> перпендикулярна плоскости <i>ACC</i><sub>1</sub> по признаку перпендикулярности прямой и плоскости, значит, точка <i>H</i>&nbsp;— ортогональная проекция точки <i>B</i> на плоскость <i>ACC</i><sub>1</sub>.</p><p class="left_margin">Прямоугольные треугольники <i>AMH</i> и <i>A</i><sub>1</sub><i>MN</i> равны по двум катетам <img src="https://ege.sdamgia.ru/formula/svg/aa/aab968b00598414eceb18e7620b77685.svg" class="tex" style="vertical-align:-3.6pt" alt="(AH=A_1M=3,"> <img src="https://ege.sdamgia.ru/formula/svg/88/88f48f91d2eb1ba882c4afdbbcc8e2b7.svg" class="tex" style="vertical-align:-3.6pt" alt="AM=A_1N=2),"> значит,</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/41/41ef900dbabcf685cfdd7c704b2ad726.svg" class="tex" style="vertical-align:-3.0pt" alt="\\angle AMH плюс \\angle A_1MN=90 в степени circ,"></p><p><img src="https://ege.sdamgia.ru/formula/svg/03/036eed3620a3e9b579085bc3c37a4d46.svg" class="tex" style="vertical-align:-2.6pt" alt="\\angle NMH=180 в степени circ минус \\angle AMH минус \\angle A_1MN=90 в степени circ."></p><p class="left_margin"></p></center><p class="left_margin">Таким образом, проекция прямой <i>BM</i> на плоскость <i>ACC</i><sub>1</sub> перпендикулярна прямой <i>MN</i>, значит, прямая <i>BM</i> перпендикулярна <i>MN</i> по теореме о трех перпендикулярах.</p><p class="left_margin">б) Из рассуждения п. а) угол <i>BMH</i>&nbsp;— искомый, а его тангенс равен отношению <i>BH</i> к <i>MH</i>. Из треугольников <i>ABH</i>, <i>AMH</i> и <i>BMH</i> соответственно находим</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/48/48f2a34f8203547d2e18de8d27cba273.svg" class="tex" style="vertical-align:-3.1pt" alt="BH=AB умножить на синус 60 в степени circ=3 корень из { 3},"></p><p><img src="https://ege.sdamgia.ru/formula/svg/64/64276d150aeab1b429707003e525a730.svg" class="tex" style="vertical-align:-3.0pt" alt="MH= корень из { 2 в степени 2 плюс 3 в степени 2 }= корень из { 13},"></p><p><img src="https://ege.sdamgia.ru/formula/svg/20/20b052065ec3aee13427a7270d8ad605.svg" class="tex" style="vertical-align:-11.1pt" alt=" тангенс \\angle BMH= дробь, числитель — 3 корень из { 3}, знаменатель — корень из { 13 }= дробь, числитель — 3 корень из { 39}, знаменатель — 13 ."></p><p class="left_margin"></p></center><p class="left_margin">Таким образом, ответ&nbsp;— <img src="https://ege.sdamgia.ru/formula/svg/69/698df19901615d6b5c5fe43321347ebc.svg" class="tex" style="vertical-align:-8.5pt" alt="\\arctg дробь, числитель — 3 корень из { 39}, знаменатель — 13 ."></p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> б) <img src="https://ege.sdamgia.ru/formula/svg/69/698df19901615d6b5c5fe43321347ebc.svg" class="tex" style="vertical-align:-8.5pt" alt="\\arctg дробь, числитель — 3 корень из { 39}, знаменатель — 13 ."></p>`,
        criteria: [
            {
                text: 'Обоснованно получены верные ответы в пунктах а) и б)',
                score: 2
            },
            {
                text: 'Выполнен только один из пунктов а) или б)',
                score: 1
            },
            {
                text: 'Решение не соответствует ни одному из критериев, приведённых выше',
                score: 0
            },
        ]
    },
    {
        id: 511239,
        num: '15',
        is_detailed_answer: true,
        task_content: `<p class="left_margin">Решите неравенство <img src="https://ege.sdamgia.ru/formula/svg/2c/2c8ac4ac96d2a8055116889e3c14d436.svg" class="tex" style="vertical-align:-8.5pt" alt=" логарифм по основанию 3 (x плюс 7) плюс дробь, числитель — 1, знаменатель — 6 логарифм по основанию 3 (x плюс 1) в степени 6 \\ge2."></p>`,
        solution_content: `<p class="left_margin">Запишем исходное неравенство в виде:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/af/aff5644c01d6ad52cdc0ed9ab7cd9bfa.svg" class="tex" style="vertical-align:-3.7pt" alt=" логарифм по основанию 3 (x плюс 7) плюс логарифм по основанию 3 |x плюс 1|\\ge2 равносильно логарифм по основанию 3 (|x плюс 1| умножить на (x плюс 7))\\ge2."> </p><p class="left_margin"></p></center><p class="left_margin">Рассмотрим первый случай:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/8c/8c1a9a10a5df93c390fea1cf3e0db354.svg" class="tex" style="vertical-align:-14.4pt" alt=" система выражений минус 7 меньше x меньше минус 1, минус (x плюс 1)(x плюс 7)\\ge9 конец системы . равносильно система выражений минус 7 меньше x меньше минус 1,(x плюс 4) в степени 2 \\le0 конец системы . равносильно x= минус 4."></p><p class="left_margin"></p></center><p class="left_margin">Рассмотрим второй случай:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/9d/9d6a943affdfeb1eef1dc65dbb5ef734.svg" class="tex" style="vertical-align:-14.4pt" alt=" система выражений x больше минус 1,(x плюс 1)(x плюс 7)\\ge9 конец системы . система выражений x больше минус 1,x в степени 2 плюс 8x минус 2\\ge0 конец системы . равносильно x\\ge минус 4 плюс корень из { 18}."></p><p class="left_margin"></p></center><p><span style="letter-spacing: 2px;">Ответ:</span> <img src="https://ege.sdamgia.ru/formula/svg/60/60333d79c584808b72ec52c004222b0b.svg" class="tex" style="vertical-align:-3.6pt" alt="\\{ минус 4\\}\\cup[ минус 4 плюс 3 корень из { 2}; плюс принадлежит fty)."></p>`,
        criteria: [
            {
                text: 'Обоснованно получен верный ответ.',
                score: 2
            },
            {
                text: 'Решение содержит вычислительную ошибку, возможно, приведшую к неверному ответу, но при этом имеется верная последовательность всех шагов решения.',
                score: 1
            },
            {
                text: `Решение не соответствует ни одному из критериев, перечисленных выше.`,
                score: 0
            }
        ]
    },
    {
        id: 561178,
        num: '16',
        is_detailed_answer: true,
        task_content: `<p class="left_margin">В треугольнике <i>ABC</i> биссектриса угла <i>A</i> пересекает сторону <i>BC</i> в точке <i>D</i>. Окружность, описанная около треугольника <i>ACD</i> пересекает сторону <i>AB</i> в точке <i>E</i>.</p><p class="left_margin">а) Докажите, что треугольник <i>CDE</i> равнобедренный.</p><p class="left_margin">б) Найдите площадь треугольника <i>CDE</i>, если <i>AB</i>&nbsp;=&nbsp;8, <i>BC</i>&nbsp;=&nbsp;7, <i>AC</i>&nbsp;=&nbsp;6.</p>`,
        solution_content: `<p class="left_margin"><img src="https://ege.sdamgia.ru/get_file?id=81080" style="float:right;margin:10px;max-width:100%"></p><p class="left_margin">а) Дуги <i>DE</i> и <i>CD</i> равны, так как на них опираются равные вписанные углы <i>DAE</i> и <i>DAC</i>, значит, равны и стягивающие их хорды <i>DE</i> и <i>DC</i>, треугольник <i>DCE</i> равнобедренный по определению.</p><p class="left_margin">б) Из треугольника <i>ABC</i> по теореме косинусов найдем</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/30/3079b8f2853042feacc6658b95e2f467.svg" class="tex" style="vertical-align:-8.5pt" alt=" косинус \\angle BAC= дробь, числитель — AB в степени 2 плюс AC в степени 2 минус BC в степени 2 , знаменатель — 2 умножить на AB умножить на AC = дробь, числитель — 64 плюс 36 минус 49, знаменатель — 2 умножить на 8 умножить на 6 = дробь, числитель — 17, знаменатель — 32 ."></p><p class="left_margin"></p></center><p class="left_margin">Четырехугольник <i>AEDC</i> вписан в окружность, значит, его противолежащие углы в сумме дают 180°. Имеем:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/ba/ba28fd610e3b180e2ce14e335fc14313.svg" class="tex" style="vertical-align:-12.2pt" alt=" синус \\angle CDE= синус \\angle BAC= корень из { 1 минус косинус в степени 2 \\angle BAC}= корень из { 1 минус левая круглая скобка дробь, числитель — 17, знаменатель — 32 правая круглая скобка в степени 2 }= дробь, числитель — 7 корень из { 15}, знаменатель — 32 ."></p><p class="left_margin"></p></center><p class="left_margin">По теореме о биссектрисе внутреннего угла треугольника</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/18/18811b368186e7a23c4a0bcb2c440a2b.svg" class="tex" style="vertical-align:-3.0pt" alt="BD:CD=AB:AC=8:6,"></p><p class="left_margin"></p></center><p> откуда находим, что <i>CD</i>&nbsp;=&nbsp;<i>DE</i>&nbsp;=&nbsp;3. Теперь найдём площадь треугольника <i>CDE</i>:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/f5/f51f994feb6a409eea90c6f8b10edf90.svg" class="tex" style="vertical-align:-8.5pt" alt="S_{CDE}= дробь, числитель — 1, знаменатель — 2 CD умножить на DE умножить на синус \\angle CDE= дробь, числитель — 1, знаменатель — 2 умножить на 3 умножить на 3 умножить на дробь, числитель — 7 корень из { 15}, знаменатель — 32 = дробь, числитель — 63 корень из { 15}, знаменатель — 64 ."></p><p class="left_margin"></p></center><p><span style="letter-spacing: 2px;">Ответ:</span> б) <img src="https://ege.sdamgia.ru/formula/svg/30/303f55f13efbe3100acc0f7955f7343b.svg" class="tex" style="vertical-align:-8.5pt" alt=" дробь, числитель — 63 корень из { 15}, знаменатель — 64 ."></p>`,
        criteria: [
            {
                text: 'Имеется верное доказательство утверждения пункта a) и обоснованно получен верный ответ в пункте б)',
                score: 3
            },
            {
                text: 'Получен обоснованный ответ в пункте б) ИЛИ  имеется верное доказательство утверждения пункта а) и при обоснованном решении пункта б) получен неверный ответ из-за арифметической ошибки',
                score: 2
            },
            {
                text: `Имеется верное доказательство утверждения пункта а) ИЛИ  при обоснованном решении пункта б) получен неверный ответ из-за арифметической ошибки,  ИЛИ  обоснованно получен верный ответ в пункте б) с использованием утверждения пункта а), при этом пункт а) не выполнен`,
                score: 1
            },
            {
                text: `Решение не соответствует ни одному из критериев, приведённых выше.`,
                score: 0
            }
        ]
    },
    {
        id: 561179,
        num: '17',
        is_detailed_answer: true,
        task_content: `<p class="left_margin">В январе 2020 года Борис взял кредит в банке на сумму <nobr>4&thinsp;200&thinsp;000</nobr> рублей. По договору с банком Борис должен был погасить долг двумя равными платежами в феврале 2021 года и феврале 2022 года, при условии, что в январе 2021 года и январе 2022 года сумма оставшегося долга увеличивается на 10%. В феврале 2021 года Борис сделал первую выплату в соответствии с договором. После этого ему удалось договориться с банком о рефинансировании кредита и уменьшить процент, на который сумма долга вырастет в январе 2022 года, до 7%. Какую сумму сэкономит Борис на рефинансировании своего кредита?</p>`,
        solution_content: `<p class="left_margin">Пусть <i>x</i> миллионов рублей составляла ежегодная выплата по изначальному договору, тогда по условию задачи</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/dc/dc5956477dba3db0dba4e69e07d4fe4a.svg" class="tex" style="vertical-align:-3.6pt" alt="((4,2 умножить на 1,1 минус x) умножить на 1,1 минус x=0 равносильно x=2,42."></p><p class="left_margin"></p></center><p class="left_margin">Величина долга после первой выплаты составляет 4,2&nbsp;·&nbsp;1,1&nbsp;−&nbsp;2,42&nbsp;=&nbsp;2,2 миллионов рублей. Согласно условию, выгода от рефинансирования составляет 3% этой суммы, то есть равняется 0,03&nbsp;·&nbsp;2&thinsp;200&thinsp;000&nbsp;=&nbsp;66&thinsp;000 рублей.</p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> 66&thinsp;000 рублей.</p>`,
        criteria: [
            {
                text: 'Обоснованно получен верный ответ.',
                score: 3
            },
            {
                text: 'Верно построена математическая модель, решение сведено к исследованию этой модели и получен результат: — неверный ответ из-за вычислительной ошибки;  — верный ответ, но решение недостаточно обосновано.',
                score: 2
            },
            {
                text: `Верно построена математическая модель, решение сведено к исследованию этой модели, при этом решение может быть не завершено`,
                score: 1
            },
            {
                text: `Решение не соответствует ни одному из критериев, приведённых выше.`,
                score: 0
            }
        ]
    },
    {
        id: 561180,
        num: '18',
        is_detailed_answer: true,
        task_content: `<p class="left_margin">Найдите все значения параметра <i>a</i>, при каждом из которых уравнение</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/50/5021ca09b5864b92b89b7a7f17594046.svg" class="tex" style="vertical-align:-10.0pt" alt=" дробь, числитель — a умножить на 25 в степени x в степени 2 минус 1 плюс 15 в степени x в степени 2 , знаменатель — 2 умножить на 9 в степени x в степени 2 минус 15 в степени { x в степени 2 }=1"></p><p class="left_margin"></p></center> <p>имеет хотя бы одно решение.</p>`,
        solution_content: `<p class="left_margin"><img src="https://ege.sdamgia.ru/get_file?id=81111" style="float:right;margin:10px;max-width:100%"></p><p class="left_margin">Положив <img src="https://ege.sdamgia.ru/formula/svg/64/640b48c4d4713d9cca862e3646f19630.svg" class="tex" style="vertical-align:-3.0pt" alt="a=25b,"> <img src="https://ege.sdamgia.ru/formula/svg/c2/c2e0e5aabb80de4d94fce881380d55b3.svg" class="tex" style="vertical-align:-11.1pt" alt=" левая круглая скобка дробь, числитель — 3, знаменатель — 5 правая круглая скобка в степени x в степени 2 =u,"> где <img src="https://ege.sdamgia.ru/formula/svg/35/359143ff714a12bc6ea8cfa58d274d15.svg" class="tex" style="vertical-align:-2.3pt" alt="0 меньше u\\le1"> и разделив числитель и знаменатель левой части уравнения на <img src="https://ege.sdamgia.ru/formula/svg/a3/a3e01b0fdb3357989f4d224772d7971d.svg" class="tex" style="vertical-align:-3.0pt" alt="5 в степени 2x в степени 2 ,"> получаем уравнение <img src="https://ege.sdamgia.ru/formula/svg/d8/d8d71758100d751ba89fe8fa15d42717.svg" class="tex" style="vertical-align:-9.3pt" alt=" дробь, числитель — b плюс u, знаменатель — 2u в степени 2 минус u =1."> При <img src="https://ege.sdamgia.ru/formula/svg/0e/0ed13d46ce67e7181069f8a47198a1d9.svg" class="tex" style="vertical-align:-3.0pt" alt="u не равно 0,"> <img src="https://ege.sdamgia.ru/formula/svg/b5/b5fc251d17389e00500aef5606514bb7.svg" class="tex" style="vertical-align:-3.0pt" alt="u не равно 0,5"> имеем:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/20/201dd99b56bf2ffc6a4660f0b4452d85.svg" class="tex" style="vertical-align:-9.3pt" alt=" дробь, числитель — b плюс u, знаменатель — 2u в степени 2 минус u =1 равносильно b плюс u=2u в степени 2 минус u равносильно 2u в степени 2 минус 2u минус b=0."></p><p class="left_margin"></p></center><p class="left_margin">Рассмотрим функцию <img src="https://ege.sdamgia.ru/formula/svg/af/af3e5368afb910d75cf293963bccdb5d.svg" class="tex" style="vertical-align:-3.6pt" alt="f(u)=2u в степени 2 минус 2u минус b"> при <img src="https://ege.sdamgia.ru/formula/svg/a2/a28e8f8875b705f45d5a210a014dcac4.svg" class="tex" style="vertical-align:-3.0pt" alt="u не равно 0,5."> Её графиком является парабола, ветви которой направлены вверх. Абсцисса вершины этой параболы равна 0,5, значит, функция будет иметь корни на промежутке <nobr>(0;&thinsp;1]</nobr> тогда и только тогда, когда выполняются два условия <img src="https://ege.sdamgia.ru/formula/svg/d9/d9c83a6ec47d35f8b5aabfba1804b2b4.svg" class="tex" style="vertical-align:-3.6pt" alt="f(0,5) меньше 0"> и <img src="https://ege.sdamgia.ru/formula/svg/be/be73b9efdd93fb03a99c6b2de26b8b66.svg" class="tex" style="vertical-align:-3.6pt" alt="f(1)\\ge0"> (см. рисунок). Окончательно получаем:</p><p class="left_margin"></p><center><p><img src="https://ege.sdamgia.ru/formula/svg/41/41176c33a98a359533c46020c5214770.svg" class="tex" style="vertical-align:-14.4pt" alt=" система выражений 0,5 минус 1 минус b меньше 0, минус b\\ge0 конец системы . равносильно минус 0,5 меньше b\\le0,"></p><p class="left_margin"></p></center><p>откуда <img src="https://ege.sdamgia.ru/formula/svg/bf/bf36d6af7922ea1b16c274802e8855bb.svg" class="tex" style="vertical-align:-3.0pt" alt=" минус 12,5 меньше a\\le0."></p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> <img src="https://ege.sdamgia.ru/formula/svg/bf/bf36d6af7922ea1b16c274802e8855bb.svg" class="tex" style="vertical-align:-3.0pt" alt=" минус 12,5 меньше a\\le0."></p>`,
        criteria: [
            {
                text: 'Обоснованно получен правильный ответ.',
                score: 4
            },
            {
                text: 'С помощью верного рассуждения получено множество значений a, отличающееся от искомого только исключением точки a = 4.',
                score: 3
            },
            {
                text: 'С помощью верного рассуждения получен промежуток (4; +∞), возможно, с исключением граничной точки a = 4 и исключением точки a = 3 ИЛИ  получен неверный ответ из-за вычислительной ошибки, но при этом верно выполнены все шаги решения.',
                score: 2
            },
            {
                text: `Задача верно сведена к исследованию взаимного расположения прямой и окружности и прямых (аналитически или графически).`,
                score: 1
            },
            {
                text: `Решение не соответствует ни одному из критериев, приведённых выше.`,
                score: 0
            }
        ]
    },
    {
        id: 561181,
        num: '19',
        is_detailed_answer: true,
        task_content: `<p class="left_margin">Сима записала несколько различных натуральных чисел, все цифры которых четны, после чего нашла сумму этих чисел и обозначила ее через <i>S</i>.</p><p class="left_margin">а) Может ли сумма цифр числа <i>S</i> быть нечетным числом?</p><p class="left_margin">б) Может ли произведение цифр числа <i>S</i> быть нечетным числом?</p><p class="left_margin">в) Пусть десятичная запись числа <i>S</i> состоит из 366 цифр. Какое наименьшее натуральное значение может принимать произведение цифр числа <i>S</i>?</p>`,
        solution_content: `<p class="left_margin">а) Да, может, например, если записать числа 4 и 6, их сумма <i>S</i>&nbsp;=&nbsp;10, сумма цифр этого числа нечетна.</p><p class="left_margin">б) Нет, не может: последняя цифра искомой суммы четна, а значит и произведение цифр будет четно.</p><p class="left_margin">в) Как было показано в п. б), последняя цифра числа <i>S</i> четна, так что искомое произведение также четно. Следовательно, оно не меньше 2. Рассмотрим число <img src="https://ege.sdamgia.ru/formula/svg/e3/e328b6603fa4f86e6a93b23b10068efb.svg" class="tex" style="vertical-align:-1.8pt" alt="S=111\\dots12">  (365 единиц и одна двойка). Оно достигается, если рассмотреть, например, числа 888...8 (365 восьмерок), 222...2 (365 двоек) и 2.</p><p>&nbsp;</p><p><span style="letter-spacing: 2px;">Ответ:</span> а) да; б) нет; в) 2.</p>`,
        criteria: [
            {
                text: 'Получены верные обоснованные ответы в пунктах а, б и в',
                score: 4
            },
            {
                text: 'Получены верные обоснованные ответы в пунктах а и б, либо получены верные обоснованные ответы в пунктах а и в',
                score: 3
            },
            {
                text: 'Получен верный обоснованный ответ в пункте б, пункты а и в не решены, либо получен верный обоснованный ответ в пункте в, пункты а и б не решены',
                score: 2
            },
            {
                text: `Приведён пример в пункте а, пункты б и в не решены`,
                score: 1
            },
            {
                text: `Решение не соответствует ни одному из критериев, перечисленных выше.`,
                score: 0
            }
        ]
    },
    {
        id: 561215,
        num: "1",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">В квартире установлен прибор учёта расхода горячей воды (счётчик). Показания на 1 марта составляли 748 м<sup>3</sup> воды, а 1 апреля — 756 м<sup>3</sup>. Сколько нужно заплатить за горячую воду за март, если стоимость 1 м<sup>3</sup> горячей воды составляет 191 руб. 50 коп.?</p>",
        solution_content: "<p class=\"left_margin\">Расход воды составил 756 − 748 = 8 м<sup>3</sup>. Поэтому нужно заплатить 8 ·  191,5 = 1532 руб.</p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 1532.</p>",
        correct_answer: "1532"
    },
    {
        id: 561216,
        num: "2",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">На диаграмме показана среднемесячная температура воздуха в городе <i>N</i> за каждый месяц 2019 года. По горизонтали указываются месяцы, по вертикали — температура в градусах Цельсия. Определите по диаграмме, какова разница между наибольшей и наименьшей среднемесячной температурой в 2019 году. Ответ дайте в градусах.</p><p><img src=\"https://ege.sdamgia.ru/get_file?id=81118\" style=\"margin:10px auto;display:block;max-width:100%\"/></p>",
        solution_content: "<p class=\"left_margin\">Из диаграммы видно, что наибольшая среднемесячная температура в 2019 году — 13, наименьшая среднемесячная температура в 2019 году — −7. Значит, разница между наибольшей и наименьшей температурой равна 13 − (−7) = 20.</p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 20.</p>",
        correct_answer: "20"
    },
    {
        id: 561217,
        num: "3",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">На клетчатой бумаге с размером клетки 1 × 1 отмечены две точки <i>A</i> и <i>B</i>. Найдите длину отрезка <i>AB</i>.</p><p><img src=\"https://ege.sdamgia.ru/get_file?id=81119\" style=\"margin:10px auto;display:block;max-width:100%\"/></p>",
        solution_content: "<p class=\"left_margin\">Расстояние между точками<i> A</i> и <i>B</i> равно длине гипотенузы треугольника <i>ABC</i>, катеты которого равны 8 и 6. Поэтому искомая длина <i>AB</i> равна 10.</p><p><img src=\"https://ege.sdamgia.ru/get_file?id=81120\" style=\"margin:10px auto;display:block;max-width:100%\"/></p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 10.</p>",
        correct_answer: "10"
    },
    {
        id: 561218,
        num: "4",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Перед началом турнира по шахматам участников случайным образом разбивают на пары с помощью жребия. Всего зарегистрировано 46 шахматистов, среди которых 19 спортсменов из Санкт-Петербурга, в том числе и Алексей Журавлёв. Найдите вероятность, что Алексей Журавлёв будет играть с шахматистом из Санкт-Петербурга.</p>",
        solution_content: "<p class=\"left_margin\">В первом туре Алексей Журавлёв может сыграть с 19 − 1 = 18 шахматистами, из которых 46 − 1 = 45 из России. Значит, вероятность того, что в первом туре Алексей Журавлёв будет играть с каким-либо шахматистом из России, равна</p><center><p><img alt=\" дробь, числитель — 18, знаменатель — 45 =0,4.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/24/24d424eab7015f0ca196d01dabd6386b.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — 18, знаменатель — 45 =0,4.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/24/24d424eab7015f0ca196d01dabd6386b.svg\" style=\"vertical-align:-8.5pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 0,4.</p>",
        correct_answer: "0,4"
    },
    {
        id: 561219,
        num: "5",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Найдите корень уравнения: <img alt=\" корень из { дробь, числитель — 5, знаменатель — 3x минус 6 }= дробь, числитель — 1, знаменатель — 6 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e4/e4cadbf0fda9d3fda5984bff05d8ec39.svg\" style=\"vertical-align:-9.7pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Возведем в квадрат:</p><center><p><img alt=\" корень из { дробь, числитель — 5, знаменатель — 3x минус 6 }= дробь, числитель — 1, знаменатель — 6 равносильно дробь, числитель — 5, знаменатель — 3x минус 6 = дробь, числитель — 1, знаменатель — 36 равносильно 180=3x минус 6 равносильно x=62.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/20/20e0ebefd172f978a667592e3fc57238.svg\" style=\"vertical-align:-9.7pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" корень из { дробь, числитель — 5, знаменатель — 3x минус 6 }= дробь, числитель — 1, знаменатель — 6 равносильно дробь, числитель — 5, знаменатель — 3x минус 6 = дробь, числитель — 1, знаменатель — 36 равносильно 180=3x минус 6 равносильно x=62.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/20/20e0ebefd172f978a667592e3fc57238.svg\" style=\"vertical-align:-9.7pt\"/></p><p><span style=\"letter-spacing:2px \">Ответ</span>: 62.</p>",
        correct_answer: "62"
    },
    {
        id: 561220,
        num: "6",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=81074\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">В треугольнике <i>ABC</i> угол <i>B</i> — тупой, <i>AB</i> = 7, <i>BC</i> = 8. Найдите величину угла, противолежащего стороне<i> AC</i>, если площадь треугольника равна <img alt=\"14 корень из { 3}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b1/b105b43d7bce06516c577676a37f2606.svg\" style=\"vertical-align:-1.8pt\"/> Ответ дайте в градусах.</p>",
        solution_content: "<p class=\"left_margin\">Выразим величину угла <i>B</i> из формулы площади треугольника:</p><center><p><img alt=\"S= дробь, числитель — 1, знаменатель — 2 умножить на AB умножить на BC умножить на синус \\angle B равносильно дробь, числитель — 1, знаменатель — 2 умножить на 7 умножить на 8 умножить на синус \\angle B=14 корень из { 3} равносильно синус \\angle B= дробь, числитель — корень из { 3}, знаменатель — 2 равносильно \\angle B=120 в степени circ.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2a/2a964f397aab42898bd1e77d0f6fad5c.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"S= дробь, числитель — 1, знаменатель — 2 умножить на AB умножить на BC умножить на синус \\angle B равносильно дробь, числитель — 1, знаменатель — 2 умножить на 7 умножить на 8 умножить на синус \\angle B=14 корень из { 3} равносильно синус \\angle B= дробь, числитель — корень из { 3}, знаменатель — 2 равносильно \\angle B=120 в степени circ.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2a/2a964f397aab42898bd1e77d0f6fad5c.svg\" style=\"vertical-align:-8.4pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 120.</p>",
        correct_answer: "120"
    },
    {
        id: 561221,
        num: "7",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Прямая <i>y</i> = −3<i>x</i> + 2 параллельна касательной к графику функции <i>y</i> = <i>x</i><sup>2</sup> + 7<i>x</i> + 3. Найдите абсциссу точки касания.</p>",
        solution_content: "<p class=\"left_margin\">Значение производной в точке касания равно угловому коэффициенту касательной. Поскольку касательная параллельна прямой <img alt=\"y= минус 3x плюс 2\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/51/518887ab791ba752d366593d52cc54d8.svg\" style=\"vertical-align:-3.0pt\"/> их угловые коэффициенты равны. Поэтому абсцисса точки касания находится из уравнения <img alt=\"{y}'= минус 3\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1b/1bf379aef5d462bf0fd9c42b2f09b634.svg\" style=\"vertical-align:-3.0pt\"/>:</p><center><p><img alt=\"(x в степени 2 плюс 7x плюс 3)'= минус 3 равносильно 2x плюс 7= минус 3 равносильно x= минус 5.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a6/a68a73513a29f0d7703ddb1550536e9d.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"(x в степени 2 плюс 7x плюс 3)'= минус 3 равносильно 2x плюс 7= минус 3 равносильно x= минус 5.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a6/a68a73513a29f0d7703ddb1550536e9d.svg\" style=\"vertical-align:-3.6pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> −5.</p>",
        correct_answer: "-5"
    },
    {
        id: 561222,
        num: "8",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=29802\" style=\"float:right;margin:10px\"/></p><p class=\"left_margin\">Во сколько раз увеличится объём конуса, если радиус его основания увеличится в 3 раза, а высота останется прежней?</p>",
        solution_content: "<p class=\"left_margin\">Объем конуса равен </p><p align=\"center\"><img alt=\"V= дробь, числитель — 1, знаменатель — 3 Sh= дробь, числитель — 1, знаменатель — 3 Пи {{r} в степени 2 }h\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6b/6b5160622a2e8c58a72e26712957a420.svg\" style=\"vertical-align:-8.5pt\"/>,</p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 9.</p>",
        correct_answer: "9"
    },
    {
        id: 561223,
        num: "9",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Вычислите <img alt=\" логарифм по основанию 2 32 умножить на логарифм по основанию 5 125.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/39/398a1c0ce949ab7997532f8d67fa8c5d.svg\" style=\"vertical-align:-3.7pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Выполним преобразования: </p><center><p><img alt=\"{{\\log }_{2}}32 умножить на ({{\\log }_{5}}125) = 5 умножить на 3=15.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/19/19fe12f6e358cb99c588e8c4fa515d1c.svg\" style=\"vertical-align:-3.7pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"{{\\log }_{2}}32 умножить на ({{\\log }_{5}}125) = 5 умножить на 3=15.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/19/19fe12f6e358cb99c588e8c4fa515d1c.svg\" style=\"vertical-align:-3.7pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 15.</p>",
        correct_answer: "15"
    },
    {
        id: 561224,
        num: "10",
        is_detailed_answer: false,
        task_content: "<p>Небольшой мячик бросают под острым углом <img alt=\"\\alpha\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7b/7b7f9dbfea05c83784f8b85149852f08.svg\" style=\"vertical-align:-1.8pt\"/> к плоской горизонтальной поверхности земли.  Расстояние, которое пролетает мячик, вычисляется по формуле <img alt=\"S= дробь, числитель — {v_0 в степени 2 }, знаменатель — g синус 2\\alpha\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ef/efbed0ba7469d11ace3ef5604864c67e.svg\" style=\"vertical-align:-10.5pt\"/> (м), где <img alt=\"v_0=9\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c6/c64900ad7c17071ebc07864b7d2a0caf.svg\" style=\"vertical-align:-2.6pt\"/> м/с — начальная скорость мячика, а <img alt=\"g\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b2/b2f5ff47436671b6e533d8dc3614845d.svg\" style=\"vertical-align:-3.0pt\"/> — ускорение свободного падения (считайте  <img alt=\"g=10\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/11/112f48e4093c514cc217aced1a5dfb3b.svg\" style=\"vertical-align:-3.0pt\"/> м/с<img alt=\"{} в степени 2 \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/02/02850d6a647bc6cdb7f44baeb1f90089.svg\" style=\"vertical-align:-1.8pt\"/>). При каком наименьшем значении угла (в градусах) мячик перелетит реку шириной 4,05 м?</p>",
        solution_content: "<p class=\"left_margin\">Задача сводится к решению неравенства <img alt=\"S больше или равно 4,05\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d3/d34c468247a54a48a554b6a6ff1061e3.svg\" style=\"vertical-align:-3.0pt\"/> на интервале <img alt=\"(0{} в степени circ ;90{} в степени circ )\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/39/3986c1441b27156d37a1ff92896f501f.svg\" style=\"vertical-align:-3.6pt\"/> при заданных значениях начальной скорости <img alt=\"{{v}_{0}}=9\\text{м/с}\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/04/041993d18ac747272554753d40c120c4.svg\" style=\"vertical-align:-3.6pt\"/> и ускорения свободного падения <img alt=\"g=10\\text{м/}{{\\text{с}} в степени 2 }\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7c/7ce42e8e23c1458d0b81d0ece7e6abc1.svg\" style=\"vertical-align:-3.6pt\"/>:</p><center><p><img alt=\" дробь, числитель — {{9} в степени 2 }, знаменатель — 10 синус 2\\alpha больше или равно 4,05 равносильно синус 2\\alpha больше или равно дробь, числитель — 1, знаменатель — 2 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c0/c02e208efbf0becd5646666fe7f06abd.svg\" style=\"vertical-align:-8.5pt\"/></p> <p align=\"center\"><img alt=\" равносильно {{30} в степени \\circ } плюс {{360} в степени \\circ }n меньше или равно 2\\alpha меньше или равно {{150} в степени \\circ } плюс {{360} в степени \\circ }n\\underset{0{} в степени circ меньше 2\\alpha меньше 180{} в степени circ }{\\mathop{ равносильно }}\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e7/e751105067c395b907fd04306a4ac31b.svg\" style=\"vertical-align:-8.4pt\"/></p> <p align=\"center\"><img alt=\"\\underset{0{} в степени circ меньше 2\\alpha меньше 180{} в степени circ }{\\mathop{ равносильно }}30{} в степени circ меньше или равно 2\\alpha меньше или равно 150{} в степени circ \\underset{0{} в степени circ меньше \\alpha меньше 90{} в степени circ }{\\mathop{ равносильно }}{{15} в степени \\circ } меньше или равно \\alpha меньше или равно {{75} в степени \\circ }.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b3/b3aeffb8bf5fc622cb8803e254d3573f.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — {{9} в степени 2 }, знаменатель — 10 синус 2\\alpha больше или равно 4,05 равносильно синус 2\\alpha больше или равно дробь, числитель — 1, знаменатель — 2 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c0/c02e208efbf0becd5646666fe7f06abd.svg\" style=\"vertical-align:-8.5pt\"/></p><p align=\"center\"><img alt=\" равносильно {{30} в степени \\circ } плюс {{360} в степени \\circ }n меньше или равно 2\\alpha меньше или равно {{150} в степени \\circ } плюс {{360} в степени \\circ }n\\underset{0{} в степени circ меньше 2\\alpha меньше 180{} в степени circ }{\\mathop{ равносильно }}\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e7/e751105067c395b907fd04306a4ac31b.svg\" style=\"vertical-align:-8.4pt\"/></p><p align=\"center\"><img alt=\"\\underset{0{} в степени circ меньше 2\\alpha меньше 180{} в степени circ }{\\mathop{ равносильно }}30{} в степени circ меньше или равно 2\\alpha меньше или равно 150{} в степени circ \\underset{0{} в степени circ меньше \\alpha меньше 90{} в степени circ }{\\mathop{ равносильно }}{{15} в степени \\circ } меньше или равно \\alpha меньше или равно {{75} в степени \\circ }.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b3/b3aeffb8bf5fc622cb8803e254d3573f.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\">Таким образом, наименьший угол, при котором мячик перелетит через реку, равен 15 градусам.</p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 15.</p>",
        correct_answer: "15"
    },
    {
        id: 561225,
        num: "11",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Из пункта <i>А</i> и пункт <i>В</i>, расстояние между которыми 90 км, одновременно выехали мотоциклист и велосипедист. Известно, что за час мотоциклист проезжает на 16 км больше, чем велосипедист. Найдите скорость велосипедиста, если известно, что он прибыл в пункт <i>В</i> на 2 часа позже мотоциклиста. Ответ дайте в км/ч.</p>",
        solution_content: "<p class=\"left_margin\">Пусть <img alt=\"v\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9e/9e3669d19b675bd57058fd4664205d2a.svg\" style=\"vertical-align:-1.8pt\"/> км/ч – скорость велосипедиста, тогда скорость мотоциклиста равна <img alt=\"v плюс 16\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/77/77a9ef5abc01ea6dfb4202d62179de1e.svg\" style=\"vertical-align:-1.8pt\"/> км/ч. Велосипедист был в пути на 2 часа больше, отсюда имеем: </p><center><img alt=\" дробь, числитель — 90, знаменатель — v минус дробь, числитель — 90, знаменатель — v плюс 16 =2 равносильно дробь, числитель — 90 умножить на 16, знаменатель — v(v плюс 16) =2\\underset{v больше 0}{\\mathop{ равносильно }}90 умножить на 8=v(v плюс 16) равносильно {{v} в степени 2 } плюс 16v минус 720=0 равносильно совокупность выражений v=20; v= минус 36 конец совокупности .\\underset{v больше 0}{\\mathop{ равносильно }}v=20.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/84/8405411e5fa5181cf5cddb51da5f6d9f.svg\" style=\"vertical-align:-14.4pt\"/><p class=\"left_margin\"></p></center><p class=\"left_margin\">Таким образом, скорость велосипедиста была равна 20 км/ч. </p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 20.</p>",
        correct_answer: "20"
    },
    {
        id: 561226,
        num: "12",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Найдите точку минимума функции <img alt=\"y=(x в степени 2 плюс 8x плюс 8)e в степени x плюс 8 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/06/06e844e08b63a5f2c9e2e957a7f843a4.svg\" style=\"vertical-align:-3.6pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Найдем производную заданной функции: </p><center><p><img alt=\"{y}'=(x в степени 2 плюс 8x плюс 8{)}'{{e} в степени x плюс 8 } плюс (x в степени 2 плюс 8x плюс 8)({{e} в степени x плюс 8 }{)}'=\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/42/427edd83b0527112e3bc8772725a452a.svg\" style=\"vertical-align:-3.6pt\"/></p><p><img alt=\"=(2x плюс 8){{e} в степени x плюс 8 } плюс (x в степени 2 плюс 8x плюс 8){{e} в степени x плюс 8 }=(x в степени 2 плюс 10x плюс 16){{e} в степени x плюс 8 }.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/01/0143c09f6fb7df3a473a5689c7204128.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"{y}'=(x в степени 2 плюс 8x плюс 8{)}'{{e} в степени x плюс 8 } плюс (x в степени 2 плюс 8x плюс 8)({{e} в степени x плюс 8 }{)}'=\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/42/427edd83b0527112e3bc8772725a452a.svg\" style=\"vertical-align:-3.6pt\"/></p><p><img alt=\"=(2x плюс 8){{e} в степени x плюс 8 } плюс (x в степени 2 плюс 8x плюс 8){{e} в степени x плюс 8 }=(x в степени 2 плюс 10x плюс 16){{e} в степени x плюс 8 }.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/01/0143c09f6fb7df3a473a5689c7204128.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\">Найдем нули производной: </p><center><p><img alt=\"(x в степени 2 плюс 10x плюс 16){{e} в степени x плюс 8 }=0 равносильно совокупность выражений x= минус 2, x= минус 8. конец совокупности \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6b/6b44f34c608ce443b81d9a3fdb62677f.svg\" style=\"vertical-align:-14.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"(x в степени 2 плюс 10x плюс 16){{e} в степени x плюс 8 }=0 равносильно совокупность выражений x= минус 2, x= минус 8. конец совокупности \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6b/6b44f34c608ce443b81d9a3fdb62677f.svg\" style=\"vertical-align:-14.4pt\"/></p><p class=\"left_margin\">Определим знаки производной функции и изобразим на рисунке поведение функции:</p><p><img src=\"https://ege.sdamgia.ru/get_file?id=81121\" style=\"margin:10px auto;display:block;max-width:100%\"/></p><p class=\"left_margin\">Искомая точка минимума <img alt=\"x= минус 2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/60/60397d20d57a4f844fd21638064762fd.svg\" style=\"vertical-align:-1.8pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> −2.</p>",
        correct_answer: "-2"
    },
    {
        id: 561227,
        num: "13",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">а) Решите уравнение <img alt=\"2 косинус в степени 2 x минус \\ctg x( синус x плюс тангенс x)=0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e8/e898a9f7d5ef1abf44fe7f691331ab12.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\">б) Найдите все корни этого уравнения, принадлежащие отрезку <img alt=\" левая квадратная скобка минус дробь, числитель — 7 Пи , знаменатель — 2 ; минус 2 Пи правая квадратная скобка .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a5/a5a1b8a7816e663998760e43cdaa1f06.svg\" style=\"vertical-align:-11.1pt\"/></p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=81122\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">а) Запишем исходное уравнение в виде:</p><center><p><img alt=\"2 косинус в степени 2 x минус \\ctg x( синус x плюс тангенс x)=0 равносильно система выражений 2 косинус в степени 2 x минус косинус x минус 1=0, синус x не равно 0 конец системы . равносильно система выражений совокупность выражений косинус x= минус дробь, числитель — 1, знаменатель — 2 , косинус x=1, конец системы . синус x не равно 0. конец совокупности . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a6/a675cad5e2b0b41287f1bb1eb3d40018.svg\" style=\"vertical-align:-24.9pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"2 косинус в степени 2 x минус \\ctg x( синус x плюс тангенс x)=0 равносильно система выражений 2 косинус в степени 2 x минус косинус x минус 1=0, синус x не равно 0 конец системы . равносильно система выражений совокупность выражений косинус x= минус дробь, числитель — 1, знаменатель — 2 , косинус x=1, конец системы . синус x не равно 0. конец совокупности . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a6/a675cad5e2b0b41287f1bb1eb3d40018.svg\" style=\"vertical-align:-24.9pt\"/></p><p class=\"left_margin\">Корни уравнения <img alt=\" косинус x=1\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ee/eec2ace9e241776c42cc3f866ed4e0d4.svg\" style=\"vertical-align:-1.8pt\"/> не удовлетворяют условию <img alt=\" синус x не равно 0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b1/b14754c84e3374e78d4efde8d96edef0.svg\" style=\"vertical-align:-3.0pt\"/> Тогда получаем:</p><center><p><img alt=\" косинус x= минус дробь, числитель — 1, знаменатель — 2 равносильно x=\\pm дробь, числитель — 2 Пи , знаменатель — 3 плюс 2 Пи k,k принадлежит Z .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2d/2dd63147844c342dd6dea3de7a54d7b3.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" косинус x= минус дробь, числитель — 1, знаменатель — 2 равносильно x=\\pm дробь, числитель — 2 Пи , знаменатель — 3 плюс 2 Пи k,k принадлежит Z .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2d/2dd63147844c342dd6dea3de7a54d7b3.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\">б) Отберём корни, принадлежащие промежутку <img alt=\" левая квадратная скобка минус дробь, числитель — 7 Пи , знаменатель — 2 ; минус 2 Пи правая квадратная скобка ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/8e/8e1f0f9ea9bc666de4d80b30fb26cb52.svg\" style=\"vertical-align:-11.1pt\"/> с помощью единичной окружности. Получаем <img alt=\" минус дробь, числитель — 10 Пи , знаменатель — 3 ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1e/1e08dad24e4e696d90d85624c923196d.svg\" style=\"vertical-align:-8.5pt\"/> <img alt=\" минус дробь, числитель — 8 Пи , знаменатель — 3 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/0f/0fb04de08267a04d5c361e6f60933418.svg\" style=\"vertical-align:-8.5pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> а) <img alt=\"\\left\\{\\pm дробь, числитель — 2 Пи , знаменатель — 3 плюс 2 Пи k:k принадлежит Z .\\};\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/8f/8fc5b629812e4de10cceb6343847608a.svg\" style=\"vertical-align:-11.1pt\"/> б) <img alt=\" минус дробь, числитель — 10 Пи , знаменатель — 3 ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1e/1e08dad24e4e696d90d85624c923196d.svg\" style=\"vertical-align:-8.5pt\"/> <img alt=\" минус дробь, числитель — 8 Пи , знаменатель — 3 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/0f/0fb04de08267a04d5c361e6f60933418.svg\" style=\"vertical-align:-8.5pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получены верные ответы в обоих пунктах.",
                score: 2
            },
            {
                text: "Обоснованно получен верный ответ в пункте а),ИЛИполучены неверные ответы из-за вычислительной ошибки, но при этом имеется верная последовательность всех шагов решения пункта а) и пункта б).",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 561228,
        num: "14",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В правильной треугольной призме <i>ABCA</i><sub>1</sub><i>B</i><sub>1</sub><i>C</i><sub>1</sub> сторона основания равна 6, а боковое ребро равно 4. На ребрах <i>BB</i><sub>1</sub> и <i>BC</i> выбраны точки <i>D</i> и <i>E</i> соответственно так, что <i>B</i><sub>1</sub><i>D</i> = <i>BE</i> = 1.</p><p class=\"left_margin\">а) Докажите, что прямые <i>A</i><sub>1</sub><i>D</i> и <i>DE</i> перпендикулярны.</p><p class=\"left_margin\">б) Найдите угол между плоскостями <i>A</i><sub>1</sub><i>DE</i> и <i>BCC</i><sub>1</sub>.</p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=81123\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">а) Пусть точка <i>H</i> — середина <i>B</i><sub>1</sub><i>C</i>, тогда прямая <i>A</i><sub>1</sub><i>H</i> перпендикулярна прямой <i>B</i><sub>1</sub><i>C</i><sub>1</sub> по свойству равностороннего треугольника, прямая <i>A</i><sub>1</sub><i>H</i> перпендикулярна прямой <i>BB</i><sub>1</sub> по свойству правильной призмы, таким образом, прямая <i>A</i><sub>1</sub><i>H</i> перпендикулярна плоскости <i>BCC</i><sub>1</sub> по признаку перпендикулярности прямой и плоскости, значит, точка <i>H</i> — ортогональная проекция точки <i>A</i><sub>1</sub> на плоскость <i>BCC</i><sub>1</sub>.</p><p class=\"left_margin\">Прямоугольные треугольники <i>B</i><sub>1</sub><i>DH</i> и <i>BDE</i> равны по двум катетам <img alt=\"(B_1H=BD=3,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/94/9469570aeedac21113aca37a6bec952c.svg\" style=\"vertical-align:-3.6pt\"/> <img alt=\"B_1D=BE=1),\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7d/7d69602eeed740505c9eede5a9fe8a72.svg\" style=\"vertical-align:-3.6pt\"/> значит,</p><center><p><img alt=\"\\angle B_1DH плюс \\angle BDE=90 в степени circ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2a/2a9828f1aea613cd6c695147b03cd2c7.svg\" style=\"vertical-align:-3.0pt\"/></p><p><img alt=\"\\angle EDH=180 в степени circ минус \\angle B_1DH минус \\angle BDE=90 в степени circ.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ff/ffb7383613791b56f257b359b297e192.svg\" style=\"vertical-align:-2.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"\\angle B_1DH плюс \\angle BDE=90 в степени circ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2a/2a9828f1aea613cd6c695147b03cd2c7.svg\" style=\"vertical-align:-3.0pt\"/></p><p><img alt=\"\\angle EDH=180 в степени circ минус \\angle B_1DH минус \\angle BDE=90 в степени circ.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ff/ffb7383613791b56f257b359b297e192.svg\" style=\"vertical-align:-2.6pt\"/></p><p class=\"left_margin\">Таким образом, проекция прямой <i>A</i><sub>1</sub><i>D</i> на плоскость <i>BCC</i><sub>1</sub> перпендикулярна прямой <i>DE</i>, значит, прямая <i>A</i><sub>1</sub><i>D</i> перпендикулярна прямой <i>DE</i> по теореме о трех перпендикулярах.</p><p class=\"left_margin\">б) Из рассуждения п. а) угол <i>A</i><sub>1</sub><i>DH</i> — искомый, а его тангенс равен отношению <i>A</i><sub>1</sub><i>H</i> к <i>DH</i>. Из треугольников <i>A</i><sub>1</sub><i>B</i><sub>1</sub><i>H</i>, <i>B</i><sub>1</sub><i>DH</i> и <i>A</i><sub>1</sub><i>DH</i> соответственно находим</p><center><p><img alt=\"A_1H=A_1B_1 умножить на синус 60 в степени circ=3 корень из { 3},\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/20/201372fbab796039fe84a62e29a6e0ae.svg\" style=\"vertical-align:-3.1pt\"/></p><p><img alt=\"DH= корень из { 1 в степени 2 плюс 3 в степени 2 }= корень из { 10},\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/60/6059b1dd4ca751fdfb99e83b0dd4f128.svg\" style=\"vertical-align:-3.0pt\"/></p><p><img alt=\" тангенс \\angle BMH= дробь, числитель — 3 корень из { 3}, знаменатель — корень из { 10 }= дробь, числитель — 3 корень из { 30}, знаменатель — 10 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/0a/0ae0d448543fdc61fc6aca1d7da5d169.svg\" style=\"vertical-align:-11.1pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"A_1H=A_1B_1 умножить на синус 60 в степени circ=3 корень из { 3},\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/20/201372fbab796039fe84a62e29a6e0ae.svg\" style=\"vertical-align:-3.1pt\"/></p><p><img alt=\"DH= корень из { 1 в степени 2 плюс 3 в степени 2 }= корень из { 10},\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/60/6059b1dd4ca751fdfb99e83b0dd4f128.svg\" style=\"vertical-align:-3.0pt\"/></p><p><img alt=\" тангенс \\angle BMH= дробь, числитель — 3 корень из { 3}, знаменатель — корень из { 10 }= дробь, числитель — 3 корень из { 30}, знаменатель — 10 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/0a/0ae0d448543fdc61fc6aca1d7da5d169.svg\" style=\"vertical-align:-11.1pt\"/></p><p class=\"left_margin\">Таким образом, ответ — <img alt=\"\\arctg дробь, числитель — 3 корень из { 30}, знаменатель — 10 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/26/266e17fe2adfb4654c22892cc01f4111.svg\" style=\"vertical-align:-8.6pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> б) <img alt=\"\\arctg дробь, числитель — 3 корень из { 30}, знаменатель — 10 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/26/266e17fe2adfb4654c22892cc01f4111.svg\" style=\"vertical-align:-8.6pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получены верные ответы в пунктах а) и б)",
                score: 2
            },
            {
                text: "Выполнен только один из пунктов а) или б)",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, приведённых выше",
                score: 0
            }
        ]
    },
    {
        id: 561229,
        num: "15",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">Решите неравенство <img alt=\" дробь, числитель — 1, знаменатель — 8 логарифм по основанию 2 (x минус 2) в степени 8 плюс логарифм по основанию 2 (x плюс 4)\\ge3.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/01/0112cb293c3704d42bdbc3efca596514.svg\" style=\"vertical-align:-8.5pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Запишем исходное неравенство в виде:</p><center><p><img alt=\" логарифм по основанию 2 |x минус 2| плюс логарифм по основанию 2 (x плюс 4)\\ge3 равносильно логарифм по основанию 2 (|x минус 2| умножить на (x плюс 4))\\ge3.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d0/d08c4262988b208d8845e39710f762ac.svg\" style=\"vertical-align:-3.6pt\"/> </p><p class=\"left_margin\"></p></center><p><img alt=\" логарифм по основанию 2 |x минус 2| плюс логарифм по основанию 2 (x плюс 4)\\ge3 равносильно логарифм по основанию 2 (|x минус 2| умножить на (x плюс 4))\\ge3.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d0/d08c4262988b208d8845e39710f762ac.svg\" style=\"vertical-align:-3.6pt\"/> </p><p class=\"left_margin\">Рассмотрим первый случай:</p><center><p><img alt=\" система выражений минус 4 меньше x меньше 2, минус (x минус 2)(x плюс 4)\\ge8 конец системы . равносильно система выражений минус 4 меньше x меньше 2,x в степени 2 плюс 2x\\le0 конец системы . равносильно минус 2 меньше или равно x\\le0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/8b/8b310dd58c4c6030e3ab1119c7905474.svg\" style=\"vertical-align:-14.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" система выражений минус 4 меньше x меньше 2, минус (x минус 2)(x плюс 4)\\ge8 конец системы . равносильно система выражений минус 4 меньше x меньше 2,x в степени 2 плюс 2x\\le0 конец системы . равносильно минус 2 меньше или равно x\\le0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/8b/8b310dd58c4c6030e3ab1119c7905474.svg\" style=\"vertical-align:-14.4pt\"/></p><p class=\"left_margin\">Рассмотрим второй случай:</p><center><p><img alt=\" система выражений x больше 2,(x минус 2)(x плюс 4)\\ge8 конец системы . система выражений x больше 2,x в степени 2 плюс 2x минус 16\\ge0 конец системы . равносильно x\\ge минус 1 плюс корень из { 17}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6e/6e23cbe081bc9e82b857ede8d3b2077e.svg\" style=\"vertical-align:-14.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" система выражений x больше 2,(x минус 2)(x плюс 4)\\ge8 конец системы . система выражений x больше 2,x в степени 2 плюс 2x минус 16\\ge0 конец системы . равносильно x\\ge минус 1 плюс корень из { 17}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6e/6e23cbe081bc9e82b857ede8d3b2077e.svg\" style=\"vertical-align:-14.4pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\"[ минус 2;0]\\cup левая квадратная скобка корень из { 17} минус 1; плюс принадлежит fty правая круглая скобка .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/fc/fc1e4a2d26c89c546e50c6391eca6263.svg\" style=\"vertical-align:-7.9pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получен верный ответ.",
                score: 2
            },
            {
                text: "Решение содержит вычислительную ошибку, возможно, приведшую к неверному ответу, но при этом имеется верная последовательность всех шагов решения",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 561230,
        num: "16",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В треугольнике <i>MPK</i> биссектриса угла <i>K</i> пересекает сторону <i>MP</i> в точке <i>A</i>. Окружность, описанная около треугольника <i>AMK</i> пересекает сторону <i>PK</i> в точке <i>B</i>.</p><p class=\"left_margin\">а) Докажите, что треугольник <i>ABM</i> равнобедренный.</p><p class=\"left_margin\">б) Найдите площадь треугольника <i>ABM</i>, если <i>MK</i> = 9, <i>PK</i> = 6, <i>MP</i> = 5.</p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=81124\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">а) Дуги <i>AB</i> и <i>AM</i> равны, так как на них опираются равные вписанные углы <i>AKB</i> и <i>AKM</i>, значит, равны и стягивающие их хорды <i>AB</i> и <i>AM</i>, треугольник <i>ABM</i> равнобедренный по определению.</p><p class=\"left_margin\">б) Из треугольника <i>MPK</i> по теореме косинусов найдем</p><center><p><img alt=\" косинус \\angle MKP= дробь, числитель — PK в степени 2 плюс MK в степени 2 минус MP в степени 2 , знаменатель — 2 умножить на PK умножить на MK = дробь, числитель — 36 плюс 81 минус 25, знаменатель — 2 умножить на 6 умножить на 9 = дробь, числитель — 23, знаменатель — 27 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e0/e09c3f0a9beb31a8424d5f4be3527579.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" косинус \\angle MKP= дробь, числитель — PK в степени 2 плюс MK в степени 2 минус MP в степени 2 , знаменатель — 2 умножить на PK умножить на MK = дробь, числитель — 36 плюс 81 минус 25, знаменатель — 2 умножить на 6 умножить на 9 = дробь, числитель — 23, знаменатель — 27 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e0/e09c3f0a9beb31a8424d5f4be3527579.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\">Четырехугольник <i>ABKM</i> вписан в окружность, значит, его противолежащие углы в сумме дают 180°. Имеем:</p><center><p><img alt=\" синус \\angle BAM= синус \\angle MKP= корень из { 1 минус косинус в степени 2 \\angle MKP}= корень из { 1 минус левая круглая скобка дробь, числитель — 23, знаменатель — 27 правая круглая скобка в степени 2 }= дробь, числитель — 10 корень из { 2}, знаменатель — 27 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ac/ac8e7c0328f8478cc2f0a6a755d1e04a.svg\" style=\"vertical-align:-12.2pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" синус \\angle BAM= синус \\angle MKP= корень из { 1 минус косинус в степени 2 \\angle MKP}= корень из { 1 минус левая круглая скобка дробь, числитель — 23, знаменатель — 27 правая круглая скобка в степени 2 }= дробь, числитель — 10 корень из { 2}, знаменатель — 27 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ac/ac8e7c0328f8478cc2f0a6a755d1e04a.svg\" style=\"vertical-align:-12.2pt\"/></p><p class=\"left_margin\">По теореме о биссектрисе внутреннего угла треугольника</p><center><p><img alt=\"AM:AP=MK:PK=9:6,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2a/2a934db448bbffd72beabc616df06ccc.svg\" style=\"vertical-align:-3.0pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"AM:AP=MK:PK=9:6,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2a/2a934db448bbffd72beabc616df06ccc.svg\" style=\"vertical-align:-3.0pt\"/></p><p> откуда находим, что <i>AM</i> = <i>AB</i> = 3. Теперь найдём площадь треугольника <i>ABM</i>:</p><center><p><img alt=\"S_{ABM}= дробь, числитель — 1, знаменатель — 2 AM умножить на AB умножить на синус \\angle BAM= дробь, числитель — 1, знаменатель — 2 умножить на 3 умножить на 3 умножить на дробь, числитель — 10 корень из { 2}, знаменатель — 27 = дробь, числитель — 5 корень из { 2}, знаменатель — 3 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/81/81a00d4d2e8a7160d12a5e249c4c074b.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"S_{ABM}= дробь, числитель — 1, знаменатель — 2 AM умножить на AB умножить на синус \\angle BAM= дробь, числитель — 1, знаменатель — 2 умножить на 3 умножить на 3 умножить на дробь, числитель — 10 корень из { 2}, знаменатель — 27 = дробь, числитель — 5 корень из { 2}, знаменатель — 3 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/81/81a00d4d2e8a7160d12a5e249c4c074b.svg\" style=\"vertical-align:-8.5pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> б) <img alt=\" дробь, числитель — 5 корень из { 2}, знаменатель — 3 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/be/bec6a8a2dd63aa774a9839e0ccfac77c.svg\" style=\"vertical-align:-8.5pt\"/></p>",
        criteria: [
            {
                text: "Имеется верное доказательство утверждения пункта a) и обоснованно получен верный ответ в пункте б)",
                score: 3
            },
            {
                text: "Получен обоснованный ответ в пункте б)ИЛИимеется  верное  доказательство  утверждения  пункта  а)  и  при обоснованном  решении  пункта  б)  получен  неверный  ответ  из-за арифметической ошибки",
                score: 2
            },
            {
                text: "Имеется верное доказательство утверждения пункта а)ИЛИпри обоснованном решении пункта б) получен неверный ответ из-за арифметической ошибки, ИЛИобоснованно  получен  верный  ответ  в  пункте  б)  с  использованием утверждения пункта а), при этом пункт а) не выполнен",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, приведённых выше",
                score: 0
            }
        ]
    },
    {
        id: 561231,
        num: "17",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В январе 2020 года Василий взял кредит в банке на сумму <nobr>3 300 000</nobr> рублей. По договору с банком Василий должен был погасить долг двумя равными платежами в феврале 2021 года и феврале 2022 года, при условии, что в январе 2021 года и январе 2022 года сумма оставшегося долга увеличивается на 20%. В феврале 2021 года Василий сделал первую выплату в соответствии с договором. После этого ему удалось договориться с банком о рефинансировании кредита и уменьшить процент, на который сумма долга вырастет в январе 2022 года, до 16%. Какую сумму сэкономит Василий на рефинансировании своего кредита?</p>",
        solution_content: "<p class=\"left_margin\">Пусть <i>x</i> миллионов рублей составляла ежегодная выплата по изначальному договору, тогда по условию задачи</p><center><p><img alt=\"((3,3 умножить на 1,2 минус x) умножить на 1,2 минус x=0 равносильно x=2,16.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4e/4eb4a4b421f31bf0da2ca3a4d9705669.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"((3,3 умножить на 1,2 минус x) умножить на 1,2 минус x=0 равносильно x=2,16.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4e/4eb4a4b421f31bf0da2ca3a4d9705669.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\">Величина долга после первой выплаты составляет 3,3 · 1,2 − 2,16 = 1,8 миллионов рублей. Согласно условию, выгода от рефинансирования составляет 4% этой суммы, то есть равняется 0,04 · 1 800 000 = 72 000 рублей.</p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 72 000 рублей.</p>",
        criteria: [
            {
                text: "Обоснованно получен верный ответ",
                score: 3
            },
            {
                text: "Верно построена математическая модель, решение сведено к исследованию этой модели и получен результат:— неверный ответ из-за вычислительной ошибки;— верный ответ, но решение недостаточно обосновано",
                score: 2
            },
            {
                text: "Верно построена математическая модель, решение сведено к исследованию этой модели, при этом решение может быть не завершено",
                score: 1
            },
            {
                text: " Решение не соответствует ни одному из критериев, перечисленных выше",
                score: 0
            }
        ]
    },
    {
        id: 561232,
        num: "18",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">Найдите все значения параметра <i>a</i>, при каждом из которых уравнение</p><center><p><img alt=\" дробь, числитель — a умножить на 49 в степени x в степени 2 минус 0,5 плюс 2 умножить на 14 в степени x в степени 2 , знаменатель — 2 умножить на 4 в степени x в степени 2 минус 14 в степени { x в степени 2 }=2\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1e/1e15fd63c62f66ecc9a0b9742dffaca9.svg\" style=\"vertical-align:-10.0pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — a умножить на 49 в степени x в степени 2 минус 0,5 плюс 2 умножить на 14 в степени x в степени 2 , знаменатель — 2 умножить на 4 в степени x в степени 2 минус 14 в степени { x в степени 2 }=2\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1e/1e15fd63c62f66ecc9a0b9742dffaca9.svg\" style=\"vertical-align:-10.0pt\"/></p><p>имеет хотя бы одно решение.</p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=81111\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">Положив <img alt=\"a=7b,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a6/a6e69ea71c2016e0fe36989ee456bf3e.svg\" style=\"vertical-align:-3.0pt\"/> <img alt=\" левая круглая скобка дробь, числитель — 2, знаменатель — 7 правая круглая скобка в степени x в степени 2 =u,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b2/b2846b6eb93584af07670718729460e9.svg\" style=\"vertical-align:-11.1pt\"/> где <img alt=\"0 меньше u\\le1\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/35/359143ff714a12bc6ea8cfa58d274d15.svg\" style=\"vertical-align:-2.3pt\"/> и, разделив числитель и знаменатель левой части уравнения на <img alt=\"7 в степени 2x в степени 2 ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a6/a6fc77ed11761435c766f269c6d875ec.svg\" style=\"vertical-align:-3.0pt\"/> получаем уравнение <img alt=\" дробь, числитель — b плюс 2u, знаменатель — 2u в степени 2 минус u =2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/f5/f5b6ed6cea3b91ba17ca9f1c056299bb.svg\" style=\"vertical-align:-9.3pt\"/> При <img alt=\"u не равно 0,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/0e/0ed13d46ce67e7181069f8a47198a1d9.svg\" style=\"vertical-align:-3.0pt\"/> <img alt=\"u не равно 0,5\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b5/b5fc251d17389e00500aef5606514bb7.svg\" style=\"vertical-align:-3.0pt\"/> имеем:</p><center><p><img alt=\" дробь, числитель — b плюс 2u, знаменатель — 2u в степени 2 минус u =2 равносильно b плюс 2u=4u в степени 2 минус 2u равносильно 4u в степени 2 минус 4u минус b=0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6e/6e1aae6d37b083417402db96795fff87.svg\" style=\"vertical-align:-9.3pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — b плюс 2u, знаменатель — 2u в степени 2 минус u =2 равносильно b плюс 2u=4u в степени 2 минус 2u равносильно 4u в степени 2 минус 4u минус b=0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6e/6e1aae6d37b083417402db96795fff87.svg\" style=\"vertical-align:-9.3pt\"/></p><p class=\"left_margin\">Рассмотрим функцию <img alt=\"f(u)=4u в степени 2 минус 4u минус b\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/90/9089745ec3ea5fb5df05bfc7b40051f5.svg\" style=\"vertical-align:-3.6pt\"/> при <img alt=\"u не равно 0,5.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a2/a28e8f8875b705f45d5a210a014dcac4.svg\" style=\"vertical-align:-3.0pt\"/> Её графиком является парабола, ветви которой направлены вверх. Абсцисса вершины этой параболы равна 0,5, значит, функция будет иметь корни на промежутке <nobr>(0; 1]</nobr> тогда и только тогда, когда выполняются два условия <img alt=\"f(0,5) меньше 0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d9/d9c83a6ec47d35f8b5aabfba1804b2b4.svg\" style=\"vertical-align:-3.6pt\"/> и <img alt=\"f(1)\\ge0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/be/be73b9efdd93fb03a99c6b2de26b8b66.svg\" style=\"vertical-align:-3.6pt\"/> (см. рисунок). Окончательно получаем:</p><center><p><img alt=\" система выражений 1 минус 2 минус b меньше 0, минус b\\ge0 конец системы . равносильно минус 1 меньше b\\le0,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9e/9e28f84738e31fbdf65004ffec7d1790.svg\" style=\"vertical-align:-14.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" система выражений 1 минус 2 минус b меньше 0, минус b\\ge0 конец системы . равносильно минус 1 меньше b\\le0,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9e/9e28f84738e31fbdf65004ffec7d1790.svg\" style=\"vertical-align:-14.4pt\"/></p><p>откуда <img alt=\" минус 7 меньше a\\le0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d0/d0e5d95a790b5ca06dd9954327153566.svg\" style=\"vertical-align:-2.3pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\" минус 7 меньше a\\le0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d0/d0e5d95a790b5ca06dd9954327153566.svg\" style=\"vertical-align:-2.3pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получен правильный ответ.",
                score: 4
            },
            {
                text: "С помощью верного рассуждения получено множество значений a, отличающееся от искомого только исключением точки a = 4.",
                score: 3
            },
            {
                text: "С помощью верного рассуждения получен промежуток (4; +∞), возможно, с исключением граничной точки a = 4 и исключением точки a = 3 ИЛИполучен неверный ответ из-за вычислительной ошибки, но при этом верно выполнены все шаги решения. ",
                score: 2
            },
            {
                text: "Задача верно сведена к исследованию взаимного расположения прямой и окружности и прямых (аналитически или графически).",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 561233,
        num: "19",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">Полина записала несколько различных натуральных чисел, все цифры которых нечетны, после чего нашла сумму этих чисел и обозначила ее через <i>S</i>.</p><p class=\"left_margin\">а) Может ли сумма цифр числа <i>S</i> быть нечетным числом, если Полина записала ровно четыре числа?</p><p class=\"left_margin\">б) Может ли произведение цифр числа <i>S</i> быть нечетным числом, если <i>S</i> &gt; 1000?</p><p class=\"left_margin\">в) Пусть десятичная запись числа <i>S</i> состоит из 2021 цифры. Какое наименьшее натуральное значение может принимать произведение цифр числа <i>S</i>?</p>",
        solution_content: "<p class=\"left_margin\">а) Да, может, например, если записать числа 1, 3, 5 и 7, их сумма <i>S</i> = 16, сумма цифр этого числа нечетна.</p><p class=\"left_margin\">б) Да, может, например, если записать числа 13, 99 и 999, их сумма <i>S</i> = 1111, произведение цифр этого числа нечетно. </p><p class=\"left_margin\">в) Рассмотрим числа вида <nobr>9, 99, 999, ..., 999...9</nobr> (в последнем числе 2020 девяток). Их сумма равна:</p><center><p class=\"left_margin\">9 + 99 + 999 + ... + 999...9 = 10 + 100 + 1000 + ... + 100...0 – 2020 = 1111...0 – 2020 = 111...1 − 2021.</p><p class=\"left_margin\"></p></center><p class=\"left_margin\">9 + 99 + 999 + ... + 999...9 = 10 + 100 + 1000 + ... + 100...0 – 2020 = 1111...0 – 2020 = 111...1 − 2021.</p><p> Так как </p><center><p><nobr>2021 = 1999 + 22 = 1999 + 19 + 3,</nobr></p><p class=\"left_margin\"></p></center><p><nobr>2021 = 1999 + 22 = 1999 + 19 + 3,</nobr></p><p> то </p><center><p class=\"left_margin\">1111...1 = 3 + 19 + 1999 + 9 + 99 + 999 + ... + 999...9.</p><p class=\"left_margin\"></p></center><p class=\"left_margin\">1111...1 = 3 + 19 + 1999 + 9 + 99 + 999 + ... + 999...9.</p><p class=\"left_margin\">Произведение полученного цифр 2021-значного числа равно единице, очевидно, это наименьшее натуральное значение.</p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span>  а) да, б) да, в) 1.</p>",
        criteria: [
            {
                text: "Получены верные обоснованные ответы в пунктах а, б и в",
                score: 4
            },
            {
                text: "Получены верные обоснованные ответы в пунктах а и б, либо получены верные обоснованные ответы в пунктах а и в",
                score: 3
            },
            {
                text: "Получен верный обоснованный ответ в пункте б, пункты а и в не решены, либо получен верный обоснованный ответ в пункте в, пункты а и б не решены",
                score: 2
            },
            {
                text: "Приведён пример в пункте а, пункты б и в не решены",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 541366,
        num: "1",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Шоколадка стоит 25 рублей. В воскресенье в супермаркете действует специальное предложение: заплатив за две шоколадки, покупатель получает три (одну — в подарок). Какое наибольшее количество шоколадок можно</p><p>получить, потратив не более 480 рублей в воскресенье?</p>",
        solution_content: "<p class=\"left_margin\">Разделим 480 на 25:</p><center><p><img alt=\" дробь, числитель — 480, знаменатель — 25 =19,2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e7/e7b9ecb4c4a6eb83b8adb67b1f4ef955.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — 480, знаменатель — 25 =19,2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e7/e7b9ecb4c4a6eb83b8adb67b1f4ef955.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\">Значит, можно будет купить 19 шоколадок. Еще 9 будут даны в подарок.  Всего можно будет получить 28 шоколадок.</p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 28.</p>",
        correct_answer: "28"
    },
    {
        id: 541367,
        num: "2",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">На диаграмме показано распределение выплавки меди в 11 странах мира (в тысячах тонн) за 2006 год. Среди представленных стран первое место по выплавке меди занимала Папуа–Новая Гвинея, одиннадцатое место — Индия. Какое место занимала Монголия? </p><p><img src=\"https://ege.sdamgia.ru/get_file?id=51755\" style=\"margin:10px auto;display:block;max-width:100%\"/></p>",
        solution_content: "<p class=\"left_margin\">Из графика видно, что Монголия занимает 4 место. </p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 4.</p>",
        correct_answer: "4"
    },
    {
        id: 541368,
        num: "3",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=65973\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">На клетчатой бумаге с размером клетки 1×1 изображён ромб. Найдите его площадь.</p>",
        solution_content: "<p class=\"left_margin\">Площадь ромба равна половине произведений диагоналей: <img alt=\"S= дробь, числитель — 1, знаменатель — 2 умножить на 4 умножить на 6 = 12.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/63/6349df820edaa6fdc141b21e19cf334a.svg\" style=\"vertical-align:-8.4pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 12.</p>",
        correct_answer: "12"
    },
    {
        id: 541369,
        num: "4",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Вероятность того, что в случайный момент времени температура тела здорового человека окажется ниже чем 36,8°<i>C</i>, равна 0,83. Найдите вероятность того, что в случайный момент времени у здорового человека температура окажется 36,8°<i>C</i> или выше.</p>",
        solution_content: "<p class=\"left_margin\">Указанные события противоположны, поэтому искомая вероятность равна <nobr>1 − 0,83 = 0,17.</nobr></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 0,17.</p>",
        correct_answer: "0,17"
    },
    {
        id: 541370,
        num: "5",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Найдите корень уравнения <img alt=\" логарифм по основанию 5 (8 минус x)= логарифм по основанию 5 2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/39/39ab029b1a14e120321eb48beaf7c01e.svg\" style=\"vertical-align:-3.7pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Решим уравнение: </p><center><p><img alt=\" логарифм по основанию 5 (8 минус x)= логарифм по основанию 5 2 равносильно x=6.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3f/3fe312a7842ec51a62f93623fc2358df.svg\" style=\"vertical-align:-3.7pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" логарифм по основанию 5 (8 минус x)= логарифм по основанию 5 2 равносильно x=6.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3f/3fe312a7842ec51a62f93623fc2358df.svg\" style=\"vertical-align:-3.7pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 6.</p>",
        correct_answer: "6"
    },
    {
        id: 541371,
        num: "6",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=53577\" style=\"float:right;margin:10px;max-width:100%; width:20%\"/></p><p class=\"left_margin\">В треугольнике <i>ABC</i> сторона <i>AB</i> равна <img alt=\"3 корень из { 2},\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d7/d7b5e5615810d672a2d23fc7fa9c8dd6.svg\" style=\"vertical-align:-3.0pt\"/> угол <i>С</i> равен 135°. Найдите радиус описанной около этого треугольника окружности.</p>",
        solution_content: "<p class=\"left_margin\">Воспользуемся теоремой синусов: </p><center><p><img alt=\" дробь, числитель — AB, знаменатель — синус \\angle C = 2R равносильно R= дробь, числитель — AB, знаменатель — 2 синус \\angle C = дробь, числитель — 3 корень из { 2}, знаменатель — 2 синус 135 в степени circ =3.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/07/075075d7f8c2a0179f40939bbc99d76f.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — AB, знаменатель — синус \\angle C = 2R равносильно R= дробь, числитель — AB, знаменатель — 2 синус \\angle C = дробь, числитель — 3 корень из { 2}, знаменатель — 2 синус 135 в степени circ =3.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/07/075075d7f8c2a0179f40939bbc99d76f.svg\" style=\"vertical-align:-8.5pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 3.</p>",
        correct_answer: "3"
    },
    {
        id: 541372,
        num: "7",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=64979\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">На рисунке изображены график функции <img alt=\"y=f(x)\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7c/7c1c9491ba7c6e8d6d2cfa82e39b22ca.svg\" style=\"vertical-align:-3.6pt\"/> и касательная к нему в точке с абсциссой <img alt=\"x_0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2e/2e9c23c4d754e38e4b358a1744420252.svg\" style=\"vertical-align:-2.6pt\"/> Найдите значение производной функции <img alt=\"f(x)\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/50/50bbd36e1fd2333108437a2ca378be62.svg\" style=\"vertical-align:-3.6pt\"/> в точке <img alt=\"x_0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2e/2e9c23c4d754e38e4b358a1744420252.svg\" style=\"vertical-align:-2.6pt\"/></p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=64980\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">Значение производной в точке касания равно угловому коэффициенту касательной, который в свою очередь равен тангенсу угла наклона данной касательной к оси абсцисс. Построим треугольник с вершинами в точках <i>A</i>(8; 8), <i>B</i>(8; 1), <i>C</i>(3; 1). Угол наклона касательной к оси абсцисс будет равен углу <i>ACB</i>:</p><center><p><img alt=\"y'(x_0) = тангенс \\angle ACB = дробь, числитель — AB, знаменатель — BC = дробь, числитель — 7, знаменатель — 5 =1,4\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/11/11cb446b030b45dedbca49b854c126fd.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"y'(x_0) = тангенс \\angle ACB = дробь, числитель — AB, знаменатель — BC = дробь, числитель — 7, знаменатель — 5 =1,4\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/11/11cb446b030b45dedbca49b854c126fd.svg\" style=\"vertical-align:-8.4pt\"/></p><p> </p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 1,4.</p>",
        correct_answer: "1,4"
    },
    {
        id: 541373,
        num: "8",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=66985\" style=\"float:right;margin:10px;max-width:100%\"/> Через среднюю линию основания треугольной призмы проведена плоскость, параллельная боковому ребру. Найдите объём этой призмы, если объём отсеченной треугольной призмы равен 5.</p>",
        solution_content: "<p class=\"left_margin\">Площадь основания отсеченной части меньше площади основания всей призмы в 4 раза (так как и высота и основание треугольника уменьшились в 2 раза). Высоты обеих частей призмы одинаковы, поэтому объем отсеченной части в 4 раза меньше объема целой призмы. Тем самым, он равен 20.</p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 20.</p>",
        correct_answer: "20"
    },
    {
        id: 541374,
        num: "9",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Найдите значение выражения <img alt=\" дробь, числитель — (5 корень из { 6}) в степени 2 , знаменатель — 10 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/37/37cd88200e2dc592f4ea7c070045a7f3.svg\" style=\"vertical-align:-8.5pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Вычислим:</p><center><p><img alt=\" дробь, числитель — (5 корень из { 6}) в степени 2 , знаменатель — 10 = дробь, числитель — 25 умножить на 6, знаменатель — 10 =15.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/70/7097bd3a70d72de41d885bbf176dc657.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — (5 корень из { 6}) в степени 2 , знаменатель — 10 = дробь, числитель — 25 умножить на 6, знаменатель — 10 =15.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/70/7097bd3a70d72de41d885bbf176dc657.svg\" style=\"vertical-align:-8.5pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 15.</p>",
        correct_answer: "15"
    },
    {
        id: 541375,
        num: "10",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Два тела, массой <i>m</i> = 9 кг каждое, движутся с одинаковой скоростью <i>v</i> = 6 м/c под углом <img alt=\"2\\alpha\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4b/4b665bcadbe886cbf7faf638e11c3887.svg\" style=\"vertical-align:-1.8pt\"/> друг к другу. Энергия (в Дж), выделяющаяся при их абсолютно неупругом соударении, вычисляется по формуле <img alt=\"Q=mv в степени 2 синус в степени 2 \\alpha,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/53/53890b32ccf999478215229b742df217.svg\" style=\"vertical-align:-3.0pt\"/> где <i>m</i> — масса (в кг), <i>v</i> — скорость (в м/с). Найдите, под каким углом <img alt=\"2\\alpha\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4b/4b665bcadbe886cbf7faf638e11c3887.svg\" style=\"vertical-align:-1.8pt\"/> должны двигаться тела, чтобы в результате соударения выделилась энергия, равная 81 Дж. Ответ дайте в градусах.</p>",
        solution_content: "<p class=\"left_margin\">Задача сводится к решению уравнения <img alt=\"Q= 81\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/84/8471018a32a9c64ba3edc40732b7e56b.svg\" style=\"vertical-align:-3.0pt\"/> Дж на полуинтервале <img alt=\"2\\alpha принадлежит (0{} в степени circ ;180{} в степени circ ]\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/5f/5f19f870ae3ce3cc13fd4c5dc1dde5e2.svg\" style=\"vertical-align:-3.6pt\"/> при заданных значениях массы тел <img alt=\"m=9\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3b/3b8aca087620bf651b2c1c8f077c0236.svg\" style=\"vertical-align:-1.8pt\"/> кг и их скоростей <img alt=\"v=6\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1b/1bcea13482cc92c588ee459f9b615591.svg\" style=\"vertical-align:-1.8pt\"/> м/с:\t</p><p align=\"center\"><img alt=\"m{{v} в степени 2 }{{ синус } в степени 2 }\\alpha= 81 равносильно 324 синус в степени 2 \\alpha = 81 равносильно {{ синус } в степени 2 }\\alpha= дробь, числитель — 1, знаменатель — 4 \\underset{0 в степени circ меньше \\alpha меньше или равно 90 в степени circ }{\\mathop{ равносильно }} синус \\alpha = дробь, числитель — 1, знаменатель — 2 \\underset{0 в степени circ меньше \\alpha меньше или равно 90 в степени circ }{\\mathop{ равносильно }}\\alpha ={{30} в степени \\circ }.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/36/3634496d29217b3b220f59dbb2e19be2.svg\" style=\"vertical-align:-9.1pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 60.</p>",
        correct_answer: "60"
    },
    {
        id: 541376,
        num: "11",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Имеется два сплава. Первый сплав содержит 40% меди, второй — 25% меди. Масса первого сплава больше массы второго на 10 кг. Из этих двух сплавов получили третий сплав, содержащий 35% меди. Найдите массу третьего</p><p>сплава. Ответ дайте в килограммах.</p>",
        solution_content: "<p class=\"left_margin\">Пусть масса первого сплава <img alt=\"m\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6f/6f8f57715090da2632453988d9a1501b.svg\" style=\"vertical-align:-1.8pt\"/> кг, а масса второго — <img alt=\"m минус 10\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/84/84c49949108bb23021b9594698b44a89.svg\" style=\"vertical-align:-1.8pt\"/> кг, масса третьего сплава — <img alt=\"2m минус 10\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e4/e437631643035b8df12dcecadb003156.svg\" style=\"vertical-align:-1.8pt\"/> кг. Первый сплав содержит 40% меди, второй — 25% меди, третий сплав — 35% меди. Тогда:</p><center><p><img alt=\"0,4m плюс 0,25(m минус 10)=0,35(2m минус 10) равносильно m=20.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/63/63d92032043216efae44cae32486095e.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"0,4m плюс 0,25(m минус 10)=0,35(2m минус 10) равносильно m=20.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/63/63d92032043216efae44cae32486095e.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\">Таким образом, масса третьего сплава равна 30 кг.</p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 30.</p>",
        correct_answer: "30"
    },
    {
        id: 541377,
        num: "12",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Найдите точку минимума функции <img alt=\"y=x в степени дробь, числитель — 3, знаменатель — 2 минус 18x плюс 29.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/29/29cc6d652bd8de8cbc74340d984b850a.svg\" style=\"vertical-align:-3.0pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Функция определена на<img alt=\"[0; плюс принадлежит fty).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/71/719597ed7fd7ada9ac80ee92cd4c5782.svg\" style=\"vertical-align:-3.6pt\"/> Найдём её производную: </p><center><p><img alt=\"y'(x)= дробь, числитель — 3, знаменатель — 2 x в степени дробь, числитель — 1, знаменатель — 2 минус 18.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/19/19ad3f60126abf6a9f131274ad054d3d.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"y'(x)= дробь, числитель — 3, знаменатель — 2 x в степени дробь, числитель — 1, знаменатель — 2 минус 18.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/19/19ad3f60126abf6a9f131274ad054d3d.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\">Найдем нули производной: </p><center><p><img alt=\" дробь, числитель — 3, знаменатель — 2 x в степени дробь, числитель — 1, знаменатель — 2 минус 18=0 равносильно x в степени дробь, числитель — 1, знаменатель — 2 =12 равносильно x=144 . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7e/7ec5b503e0369932eae1ab59eef75b93.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — 3, знаменатель — 2 x в степени дробь, числитель — 1, знаменатель — 2 минус 18=0 равносильно x в степени дробь, числитель — 1, знаменатель — 2 =12 равносильно x=144 . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7e/7ec5b503e0369932eae1ab59eef75b93.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\">Определим знаки производной функции и изобразим на рисунке поведение функции: </p><center><p><img src=\"https://ege.sdamgia.ru/get_file?id=67928\" style=\"margin:10px auto;display:block;max-width:100%\"/></p><p class=\"left_margin\"></p></center><p><img src=\"https://ege.sdamgia.ru/get_file?id=67928\" style=\"margin:10px auto;display:block;max-width:100%\"/></p><p class=\"left_margin\">Искомая точка минимума <img alt=\"x_{min}=144.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/f4/f4716d77faca78381ca59bded8c3ebcb.svg\" style=\"vertical-align:-2.5pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 144.</p>",
        correct_answer: "144"
    },
    {
        id: 541378,
        num: "13",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">а) Решите уравнение <img alt=\"2 косинус в степени 3 x плюс корень из 3 косинус в степени 2 x плюс 2 косинус x плюс корень из 3 =0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2d/2d957ece2d448372b65ea13145e52c24.svg\" style=\"vertical-align:-1.8pt\"/></p><p class=\"left_margin\">б) Найдите все корни этого уравнения, принадлежащие отрезку <img alt=\" левая квадратная скобка минус 2 Пи ; минус дробь, числитель — Пи , знаменатель — 2 правая квадратная скобка .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/38/382abe8df29a46c7b817478ac932f28f.svg\" style=\"vertical-align:-8.4pt\"/></p>",
        solution_content: "<p class=\"left_margin\">a) Сгруппируем слагаемые и разложим левую часть уравнения на множители:</p><center><p><img alt=\"2 косинус в степени 3 x плюс корень из 3 косинус в степени 2 x плюс 2 косинус x плюс корень из 3 =0 равносильно 2 косинус x( косинус в степени 2 x плюс 1) плюс корень из 3 ( косинус в степени 2 x плюс 1)=0 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3c/3c651a00ee2819deec8d0b6d559b7e9c.svg\" style=\"vertical-align:-3.6pt\"/></p><p><img alt=\" равносильно ( косинус в степени 2 x плюс 1)(2 косинус x плюс корень из 3 )=0 равносильно 2 косинус x плюс корень из 3 =0 равносильно косинус x= минус дробь, числитель — корень из 3 , знаменатель — 2 равносильно x=\\pm дробь, числитель — 5 Пи , знаменатель — 6 плюс 2 Пи k,k принадлежит Z .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/bc/bc5a1f6a86f4c58e1ccfc8e7f912e0f2.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"2 косинус в степени 3 x плюс корень из 3 косинус в степени 2 x плюс 2 косинус x плюс корень из 3 =0 равносильно 2 косинус x( косинус в степени 2 x плюс 1) плюс корень из 3 ( косинус в степени 2 x плюс 1)=0 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3c/3c651a00ee2819deec8d0b6d559b7e9c.svg\" style=\"vertical-align:-3.6pt\"/></p><p><img alt=\" равносильно ( косинус в степени 2 x плюс 1)(2 косинус x плюс корень из 3 )=0 равносильно 2 косинус x плюс корень из 3 =0 равносильно косинус x= минус дробь, числитель — корень из 3 , знаменатель — 2 равносильно x=\\pm дробь, числитель — 5 Пи , знаменатель — 6 плюс 2 Пи k,k принадлежит Z .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/bc/bc5a1f6a86f4c58e1ccfc8e7f912e0f2.svg\" style=\"vertical-align:-8.5pt\"/></p><p><img src=\"https://ege.sdamgia.ru/get_file?id=51558\" style=\"float:right;margin:10px;max-width:100%; width:20%\"/></p><p> </p><p> </p><p class=\"left_margin\">б) С помощью числовой окружности отберём корни уравнения, принадлежащие отрезку <img alt=\" левая квадратная скобка минус 2 Пи ; минус дробь, числитель — Пи , знаменатель — 2 правая квадратная скобка .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/38/382abe8df29a46c7b817478ac932f28f.svg\" style=\"vertical-align:-8.4pt\"/> Получим числа <img alt=\" минус дробь, числитель — 7 Пи , знаменатель — 6 , минус дробь, числитель — 5 Пи , знаменатель — 6 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/57/5794f2972e5100132c146f71b77fc651.svg\" style=\"vertical-align:-8.4pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> а) <img alt=\"\\pm дробь, числитель — 5 Пи , знаменатель — 6 плюс 2 Пи k,k принадлежит Z ;\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d1/d17a83f83cb69ce0dd9757a9c077b802.svg\" style=\"vertical-align:-8.4pt\"/>  б) <img alt=\" минус дробь, числитель — 7 Пи , знаменатель — 6 , минус дробь, числитель — 5 Пи , знаменатель — 6 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/57/5794f2972e5100132c146f71b77fc651.svg\" style=\"vertical-align:-8.4pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получены верные ответы в обоих пунктах.",
                score: 2
            },
            {
                text: "Обоснованно получен верный ответ в пункте а),ИЛИполучены неверные ответы из-за вычислительной ошибки, но при этом имеется верная последовательность всех шагов решения пункта а) и пункта б).",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 541379,
        num: "14",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В правильной четырёхугольной пирамиде <i>SABCD</i> сторона основания <i>AB</i> равна 4, а боковое ребро <i>SA</i> равно 7. На рёбрах <i>CD</i> и <i>SC</i> отмечены точки <i>N</i> и <i>K</i> соответственно, причём <i>DN</i> : <i>NC</i> = <i>SK</i> : <i>KC</i> = 1 : 3. Плоскость α содержит прямую <i>KN</i> и параллельна прямой <i>BC</i>. </p><p class=\"left_margin\">а) Докажите, что плоскость α параллельна прямой <i>SA</i>.</p><p class=\"left_margin\">б) Найдите угол между плоскостями α и <i>SBC</i>.</p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=61513\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">а) Построим прямую <i>MN</i> параллельна <i>CB</i> и <i>KP</i> параллельна <i>CB</i>, <img alt=\"M принадлежит AB, P принадлежит SB\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/86/8645224b3bb52364863003c937804182.svg\" style=\"vertical-align:-3.0pt\"/>. Плоскость <i>NMP</i> параллельна <i>BC</i> и содержит<i> NK</i>, таким образом <i>NMP</i> искомая плоскость α. По теореме о пропорциональных отрезках  имеем: <img alt=\" дробь, числитель — SP, знаменатель — PB = дробь, числитель — AM, знаменатель — MB \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c4/c414e5999b3d8c3a4f19d9d20cee178c.svg\" style=\"vertical-align:-8.3pt\"/>. Таким образом, <i>PM</i> параллельна <i>SA</i>, значит, <i>SA </i> параллельна α. </p><p class=\"left_margin\">б) Заметим, что <i>NM</i> параллельна <i>DA</i> и <i>SA</i> параллельна <i>PM</i> , тогда <img alt=\"\\alpha|| SDA.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/28/28bbe60b3e8f3d08a41a501feb256c8c.svg\" style=\"vertical-align:-3.6pt\"/> Таким образом, угол между плоскостью <img alt=\"\\alpha\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7b/7b7f9dbfea05c83784f8b85149852f08.svg\" style=\"vertical-align:-1.8pt\"/> и плоскостью <i>SBC</i> равен углу между плоскостями <i>SBC</i> и <i>SDA</i>. Тогда искомый угол <img alt=\"\\varphi=2\\angle FSO,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d2/d26e02728b5c0c2e326ca15556aefbf3.svg\" style=\"vertical-align:-3.4pt\"/> где<i> F</i> — середина <i>BC</i>, а<i> O</i> — цетнр основания пирамиды.  Таким образом, <img alt=\" синус \\angle FSO = дробь, числитель — OF, знаменатель — SF = дробь, числитель — 2, знаменатель — корень из { 49 минус 4 }= дробь, числитель — 2, знаменатель — 3 корень из { 5 },\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2c/2c579d60a4a5219a6c16f91a829ec3d6.svg\" style=\"vertical-align:-10.9pt\"/> а <img alt=\"\\varphi = 2 \\arcsin дробь, числитель — 2, знаменатель — 3 корень из { 5 }.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/52/52576877a7bbf946ba3532cbe3e3f389.svg\" style=\"vertical-align:-11.0pt\"/></p><p> </p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\" 2\\arcsin дробь, числитель — 2, знаменатель — 3 корень из { 5 }. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/5c/5c89bdad486f51a6291f47aa271df469.svg\" style=\"vertical-align:-11.0pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получены верные ответы в пунктах а) и б)",
                score: 2
            },
            {
                text: "Выполнен только один из пунктов а) или б)",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, приведённых выше",
                score: 0
            }
        ]
    },
    {
        id: 541380,
        num: "15",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">Решите неравенство <img alt=\" логарифм по основанию 5 левая круглая скобка левая круглая скобка 3 минус x)(x в степени 2 плюс 2 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 5 левая круглая скобка x в степени 2 минус 7x плюс 12 правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка 5 минус x правая круглая скобка .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/06/062691cceb1908016c5fcbdc1c1024e6.svg\" style=\"vertical-align:-4.7pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Воспользуемся свойством логарифма</p><center><p><img alt=\" логарифм по основанию 5 левая круглая скобка левая круглая скобка 3 минус x)(x в степени 2 плюс 2 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 5 левая круглая скобка x в степени 2 минус 7x плюс 12 правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка 5 минус x правая круглая скобка равносильно система выражений логарифм по основанию 5 левая круглая скобка левая круглая скобка 3 минус x)(x в степени 2 плюс 2 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 5 левая круглая скобка левая круглая скобка x в степени 2 минус 7x плюс 12 правая круглая скобка левая круглая скобка 5 минус x правая круглая скобка правая круглая скобка ,5 минус x больше 0 конец системы . равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/60/60fdb62eab807702531335b57dc054db.svg\" style=\"vertical-align:-14.4pt\"/></p><p><img alt=\" равносильно система выражений левая круглая скобка 3 минус x)(x в степени 2 плюс 2 правая круглая скобка больше или равно левая круглая скобка x в степени 2 минус 7x плюс 12 правая круглая скобка левая круглая скобка 5 минус x правая круглая скобка ,5 минус x больше 0,x в степени 2 минус 7x плюс 12 больше 0 конец системы . равносильно система выражений левая круглая скобка 3 минус x)(x в степени 2 плюс 2 правая круглая скобка больше или равно левая круглая скобка x минус 3 правая круглая скобка левая круглая скобка x минус 4 правая круглая скобка левая круглая скобка 5 минус x правая круглая скобка ,x меньше 5,x в степени 2 минус 7x плюс 12 больше 0 конец системы . равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/55/557396a97fd4c0b244cd293720d70cb0.svg\" style=\"vertical-align:-21.0pt\"/></p><p><img alt=\" равносильно система выражений (x минус 3)(x в степени 2 плюс 2 минус x в степени 2 плюс 9x минус 20)\\le0,x меньше 5,x в степени 2 минус 7x плюс 12 больше 0 конец системы . равносильно система выражений (x минус 3)(9x минус 18)\\le0,x меньше 5,(x минус 3)(x минус 4) больше 0 конец системы . равносильно 2 меньше или равно x меньше 3.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b8/b84d6a03e85a6277873ea7e806f8edf1.svg\" style=\"vertical-align:-21.0pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" логарифм по основанию 5 левая круглая скобка левая круглая скобка 3 минус x)(x в степени 2 плюс 2 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 5 левая круглая скобка x в степени 2 минус 7x плюс 12 правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка 5 минус x правая круглая скобка равносильно система выражений логарифм по основанию 5 левая круглая скобка левая круглая скобка 3 минус x)(x в степени 2 плюс 2 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 5 левая круглая скобка левая круглая скобка x в степени 2 минус 7x плюс 12 правая круглая скобка левая круглая скобка 5 минус x правая круглая скобка правая круглая скобка ,5 минус x больше 0 конец системы . равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/60/60fdb62eab807702531335b57dc054db.svg\" style=\"vertical-align:-14.4pt\"/></p><p><img alt=\" равносильно система выражений левая круглая скобка 3 минус x)(x в степени 2 плюс 2 правая круглая скобка больше или равно левая круглая скобка x в степени 2 минус 7x плюс 12 правая круглая скобка левая круглая скобка 5 минус x правая круглая скобка ,5 минус x больше 0,x в степени 2 минус 7x плюс 12 больше 0 конец системы . равносильно система выражений левая круглая скобка 3 минус x)(x в степени 2 плюс 2 правая круглая скобка больше или равно левая круглая скобка x минус 3 правая круглая скобка левая круглая скобка x минус 4 правая круглая скобка левая круглая скобка 5 минус x правая круглая скобка ,x меньше 5,x в степени 2 минус 7x плюс 12 больше 0 конец системы . равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/55/557396a97fd4c0b244cd293720d70cb0.svg\" style=\"vertical-align:-21.0pt\"/></p><p><img alt=\" равносильно система выражений (x минус 3)(x в степени 2 плюс 2 минус x в степени 2 плюс 9x минус 20)\\le0,x меньше 5,x в степени 2 минус 7x плюс 12 больше 0 конец системы . равносильно система выражений (x минус 3)(9x минус 18)\\le0,x меньше 5,(x минус 3)(x минус 4) больше 0 конец системы . равносильно 2 меньше или равно x меньше 3.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b8/b84d6a03e85a6277873ea7e806f8edf1.svg\" style=\"vertical-align:-21.0pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\"[2;3).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/66/669665efc55ed45cff7cbe105ea62dfe.svg\" style=\"vertical-align:-3.6pt\"/></p><p> </p><p><b>Приведём другое решение:</b></p><p class=\"left_margin\">Учитывая, что <img alt=\"x в степени 2 плюс 2 больше 0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1d/1dbc1c66a9a5679b77c8b7a32b19dc35.svg\" style=\"vertical-align:-1.8pt\"/> при любом значении <i>x</i>, получаем</p><center><p><img alt=\" логарифм по основанию 5 левая круглая скобка левая круглая скобка 3 минус x)(x в степени 2 плюс 2 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 5 левая круглая скобка x в степени 2 минус 7x плюс 12 правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка 5 минус x правая круглая скобка равносильно логарифм по основанию 5 левая круглая скобка 3 минус x правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка x в степени 2 плюс 2 правая круглая скобка больше или равно логарифм по основанию 5 левая круглая скобка 3 минус x правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка 4 минус x правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка 5 минус x правая круглая скобка равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c0/c0d77dd0ec84c1b269f38785117fcfc6.svg\" style=\"vertical-align:-4.7pt\"/></p><p> </p><p><img alt=\" равносильно система выражений логарифм по основанию 5 левая круглая скобка x в степени 2 плюс 2 правая круглая скобка больше или равно логарифм по основанию 5 левая круглая скобка 4 минус x правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка 5 минус x правая круглая скобка ,3 минус x больше 0 конец системы . \\underset{x меньше 3}{\\mathop{ равносильно }} система выражений x в степени 2 плюс 2 больше или равно x в степени 2 минус 9x плюс 20,x меньше 3 конец системы . равносильно система выражений 9x минус 18\\ge0,x меньше 3 конец системы . равносильно 2 меньше или равно x меньше 3.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/79/7992840c632f380c2cc92f0c7982dec0.svg\" style=\"vertical-align:-14.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" логарифм по основанию 5 левая круглая скобка левая круглая скобка 3 минус x)(x в степени 2 плюс 2 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 5 левая круглая скобка x в степени 2 минус 7x плюс 12 правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка 5 минус x правая круглая скобка равносильно логарифм по основанию 5 левая круглая скобка 3 минус x правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка x в степени 2 плюс 2 правая круглая скобка больше или равно логарифм по основанию 5 левая круглая скобка 3 минус x правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка 4 минус x правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка 5 минус x правая круглая скобка равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c0/c0d77dd0ec84c1b269f38785117fcfc6.svg\" style=\"vertical-align:-4.7pt\"/></p><p> </p><p><img alt=\" равносильно система выражений логарифм по основанию 5 левая круглая скобка x в степени 2 плюс 2 правая круглая скобка больше или равно логарифм по основанию 5 левая круглая скобка 4 минус x правая круглая скобка плюс логарифм по основанию 5 левая круглая скобка 5 минус x правая круглая скобка ,3 минус x больше 0 конец системы . \\underset{x меньше 3}{\\mathop{ равносильно }} система выражений x в степени 2 плюс 2 больше или равно x в степени 2 минус 9x плюс 20,x меньше 3 конец системы . равносильно система выражений 9x минус 18\\ge0,x меньше 3 конец системы . равносильно 2 меньше или равно x меньше 3.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/79/7992840c632f380c2cc92f0c7982dec0.svg\" style=\"vertical-align:-14.4pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\"[2;3).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/66/669665efc55ed45cff7cbe105ea62dfe.svg\" style=\"vertical-align:-3.6pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получен верный ответ.",
                score: 2
            },
            {
                text: "Решение содержит вычислительную ошибку, возможно, приведшую к неверному ответу, но при этом имеется верная последовательность всех шагов решения.",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 541381,
        num: "16",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В треугольнике <i>ABC</i> угол <i>A</i> равен 120°. Прямые, содержащие высоты <i>BM</i> и <i>CN</i> треугольника <i>ABC</i>, пересекаются в точке <i>H</i>. Точка <i>O</i> — центр окружности, описанной около треугольника <i>ABC</i>.</p><p class=\"left_margin\">а) Докажите, что <i>AH</i> = <i>AO</i>.</p><p class=\"left_margin\">б) Найдите площадь треугольника <i>AHO</i>, если <img alt=\"BC = корень из { 15} ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c8/c836b2a2745eb578778c184d78c00cf3.svg\" style=\"vertical-align:-3.0pt\"/><img alt=\" \\angle ABC=45 в степени circ.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9e/9eec07614060b75e02b5012a50abae87.svg\" style=\"vertical-align:-1.8pt\"/></p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=63379\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">а) По теореме синусов имеем: <img alt=\"BC=2AO умножить на синус 120 в степени circ = AO корень из { 3}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/63/63871d35d8add273a8ac5ace77f499bd.svg\" style=\"vertical-align:-1.8pt\"/> Четырехугольник <i>MHNA</i> вписан в окружность с диаметром <i>AH</i>, тогда по теореме синусов для треугольника <i>MNA</i>  имеем: </p><center><p><img alt=\"MN =2R умножить на синус 120 в степени circ=AH умножить на синус 120 в степени circ = AH умножить на дробь, числитель — корень из { 3}, знаменатель — 2 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/32/327472e5d25ce9c63cba64e706676b76.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"MN =2R умножить на синус 120 в степени circ=AH умножить на синус 120 в степени circ = AH умножить на дробь, числитель — корень из { 3}, знаменатель — 2 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/32/327472e5d25ce9c63cba64e706676b76.svg\" style=\"vertical-align:-8.5pt\"/></p><p>  Треугольники <i>MAN</i> и <i>BAC</i> подобны так как </p><center><p><img alt=\" дробь, числитель — MA, знаменатель — AB = дробь, числитель — AN, знаменатель — AC = косинус 60 в степени circ = дробь, числитель — 1, знаменатель — 2 ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a0/a0623aa0e1d5c7087d08322072153d27.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — MA, знаменатель — AB = дробь, числитель — AN, знаменатель — AC = косинус 60 в степени circ = дробь, числитель — 1, знаменатель — 2 ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a0/a0623aa0e1d5c7087d08322072153d27.svg\" style=\"vertical-align:-8.4pt\"/></p><p> тогда <img alt=\"MN= дробь, числитель — 1, знаменатель — 2 BC.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c4/c44ab2d26e8d754162bfd5f47e003ef7.svg\" style=\"vertical-align:-8.4pt\"/> Подставляя получаем, </p><center><p><img alt=\" дробь, числитель — корень из { 3}, знаменатель — 2 AH = дробь, числитель — 1, знаменатель — 2 умножить на AO умножить на корень из { 3} равносильно AH=AO.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/72/720c1a983b4bc64797e37d9bb01bf0f9.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — корень из { 3}, знаменатель — 2 AH = дробь, числитель — 1, знаменатель — 2 умножить на AO умножить на корень из { 3} равносильно AH=AO.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/72/720c1a983b4bc64797e37d9bb01bf0f9.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\">б) По теореме о вписанном угле <img alt=\"\\angle BOA = 2 \\angle ACB = 2 умножить на 15 в степени circ= 30 в степени circ.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/eb/ebdd4cf48d56885e08bafadfad5aa1c5.svg\" style=\"vertical-align:-1.8pt\"/> Тогда </p><center><p><img alt=\"\\angle BAO = дробь, числитель — 180 в степени circ минус 30 в степени circ, знаменатель — 2 =75 в степени circ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4c/4cc5448eb98b5e850951ca42aeeb5b54.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"\\angle BAO = дробь, числитель — 180 в степени circ минус 30 в степени circ, знаменатель — 2 =75 в степени circ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4c/4cc5448eb98b5e850951ca42aeeb5b54.svg\" style=\"vertical-align:-8.4pt\"/></p><center><p><img alt=\"AH=AO= дробь, числитель — BC, знаменатель — корень из { 3 }= дробь, числитель — корень из { 15}, знаменатель — корень из { 3 }= корень из { 5}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7b/7b94c73cc2552a08aeab420f109b2293.svg\" style=\"vertical-align:-11.1pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"AH=AO= дробь, числитель — BC, знаменатель — корень из { 3 }= дробь, числитель — корень из { 15}, знаменатель — корень из { 3 }= корень из { 5}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7b/7b94c73cc2552a08aeab420f109b2293.svg\" style=\"vertical-align:-11.1pt\"/></p><p class=\"left_margin\">Найдем площадь треугольника </p><center><p><img alt=\"S_{AHO} = дробь, числитель — 1, знаменатель — 2 умножить на корень из { 5} в степени 2 умножить на синус 150 в степени circ = дробь, числитель — 5, знаменатель — 4 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/66/666c4bc026fdf28717bce02a02559f4b.svg\" style=\"vertical-align:-8.3pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"S_{AHO} = дробь, числитель — 1, знаменатель — 2 умножить на корень из { 5} в степени 2 умножить на синус 150 в степени circ = дробь, числитель — 5, знаменатель — 4 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/66/666c4bc026fdf28717bce02a02559f4b.svg\" style=\"vertical-align:-8.3pt\"/></p><p> </p><p> </p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\" дробь, числитель — 5, знаменатель — 4 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9b/9b0f4dce95bc10b787799a2c49589b41.svg\" style=\"vertical-align:-8.3pt\"/></p>",
        criteria: [
            {
                text: "Имеется верное доказательство утверждения пункта a) и обоснованно получен верный ответ в пункте б)",
                score: 3
            },
            {
                text: "Получен обоснованный ответ в пункте б)ИЛИимеется  верное  доказательство  утверждения  пункта  а)  и  при обоснованном  решении  пункта  б)  получен  неверный  ответ  из-за арифметической ошибки",
                score: 2
            },
            {
                text: "Имеется верное доказательство утверждения пункта а)ИЛИпри обоснованном решении пункта б) получен неверный ответ из-за арифметической ошибки, ИЛИобоснованно  получен  верный  ответ  в  пункте  б)  с  использованием утверждения пункта а), при этом пункт а) не выполнен",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, приведённых выше",
                score: 0
            }
        ]
    },
    {
        id: 541382,
        num: "17",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В июле планируется взять кредит в банке на сумму 5 млн рублей на некоторый срок (целое число лет). Условия его возврата таковы:</p><p class=\"left_margin\">— каждый январь долг возрастает на 20 % по сравнению с концом предыдущего года;</p><p class=\"left_margin\">— с февраля по июнь каждого года необходимо выплатить часть долга;</p><p class=\"left_margin\">— в июле каждого года долг должен быть на одну и ту же сумму меньше долга на июль предыдущего года.</p><p class=\"left_margin\">На сколько лет планируется взять кредит, если известно, что общая сумма выплат после его полного погашения составит 7,5 млн рублей?</p>",
        solution_content: "<p class=\"left_margin\">Пусть кредит взят на <i>n</i> лет, сумма кредита равна <i>S</i> = 5 млн руб. Составим таблицу по данным задачи.</p><p> </p><table style=\"margin:auto\"><p></p><tr><td style=\"text-align:center\">Номер<br/>года</td><td style=\"text-align:center\">Долг в январе<br/> (с учетом процентов), руб.</td><td style=\"text-align:center\">Платёж, <br/>руб.</td><td style=\"text-align:center\">Долг в июле<br/>(после платежа), руб.</td></tr><p></p><tr><p></p><td style=\"text-align:center\"></td><p></p><td style=\"text-align:center\"></td><p></p><td style=\"text-align:center\"></td><p></p><td style=\"text-align:center\"><img alt=\"S\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/5d/5dbc98dcc983a70728bd082d1a47546e.svg\" style=\"vertical-align:-1.8pt\"/></td></tr><p></p><tr><p></p><td style=\"text-align:center\">1</td><p></p><td style=\"text-align:center\"><img alt=\"1,2S\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/48/481752f2f0985c34b58d4c42631d284c.svg\" style=\"vertical-align:-3.0pt\"/></td><p></p><td style=\"text-align:center\"><img alt=\"0,2S плюс дробь, числитель — S, знаменатель — n \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/89/89824208a88751ae5a69a06bfb7b50e1.svg\" style=\"vertical-align:-8.4pt\"/></td><p></p><td style=\"text-align:center\"><img alt=\"S минус дробь, числитель — S, знаменатель — n \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4b/4bffde354bfb403070949ad5e0f39296.svg\" style=\"vertical-align:-8.4pt\"/></td></tr><p></p><tr><p></p><td style=\"text-align:center\">2</td><p></p><td style=\"text-align:center\"><img alt=\"1,2 левая круглая скобка S минус дробь, числитель — S, знаменатель — n правая круглая скобка \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2d/2d696038abd236c6cfee48d97b797abd.svg\" style=\"vertical-align:-11.1pt\"/></td><p></p><td style=\"text-align:center\"><img alt=\"0,2 левая круглая скобка S минус дробь, числитель — S, знаменатель — n правая круглая скобка плюс дробь, числитель — S, знаменатель — n \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d6/d6b23eecc721c7c73962f1fb0c30147f.svg\" style=\"vertical-align:-11.1pt\"/></td><p></p><td style=\"text-align:center\"><img alt=\"S минус дробь, числитель — S, знаменатель — n минус дробь, числитель — S, знаменатель — n \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ef/ef401c7628b374a72cbfa9037fbb4ed8.svg\" style=\"vertical-align:-8.4pt\"/></td></tr><p></p><tr><p></p><td style=\"text-align:center\">...</td><p></p><td style=\"text-align:center\">...</td><p></p><td style=\"text-align:center\">...</td><p></p><td style=\"text-align:center\">...</td></tr><p></p><tr><p></p><td style=\"text-align:center\"><img alt=\"n минус 1\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a4/a438673491daae8148eae77373b6a467.svg\" style=\"vertical-align:-1.8pt\"/></td><p></p><td style=\"text-align:center\">...</td><p></p><td style=\"text-align:center\">...</td><p></p><td style=\"text-align:center\"><img alt=\" дробь, числитель — S, знаменатель — n \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/04/04c72287825af377b3abe7fde118615f.svg\" style=\"vertical-align:-8.4pt\"/></td></tr><p></p><tr><p></p><td style=\"text-align:center\"><i>n</i></td><p></p><td style=\"text-align:center\"><img alt=\"1,2 умножить на дробь, числитель — S, знаменатель — n \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/dc/dce1fe941ab5c87f47bfe62b5bfa9d31.svg\" style=\"vertical-align:-8.4pt\"/></td><p></p><td style=\"text-align:center\"><img alt=\"0,2 умножить на дробь, числитель — S, знаменатель — n плюс дробь, числитель — S, знаменатель — n \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/db/dba2887009a5436fe511e8989c024081.svg\" style=\"vertical-align:-8.4pt\"/></td><p></p><td style=\"text-align:center\"><img alt=\"0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/cf/cfcd208495d565ef66e7dff9f98764da.svg\" style=\"vertical-align:-1.8pt\"/></td></tr></table><p> </p><p class=\"left_margin\">Суммируем все выплаты:</p><center><p><img alt=\"B_n = \\underset{первая выплата}{\\mathop{ левая круглая скобка 0,2S плюс дробь, числитель — S, знаменатель — n правая круглая скобка }} плюс \\underset{вторая выплата}{\\mathop{ левая круглая скобка 0,2 умножить на дробь, числитель — (n минус 1)S, знаменатель — n плюс дробь, числитель — S, знаменатель — n правая круглая скобка }} плюс ... плюс \\underset{n минус я выплата}{\\mathop{ левая круглая скобка 0,2 умножить на дробь, числитель — S, знаменатель — n плюс дробь, числитель — S, знаменатель — n правая круглая скобка }}=\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/0c/0cdf5ba667967da47bcbae5f9c622bf1.svg\" style=\"vertical-align:-19.4pt\"/></p><p><img alt=\"= n умножить на дробь, числитель — S, знаменатель — n плюс \\underset{суммаарифм.прогрессии}{\\mathop{0,2 умножить на дробь, числитель — S плюс дробь, числитель — S, знаменатель — n , знаменатель — { 2} умножить на n}} =S плюс 0,1S умножить на (n плюс 1).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d0/d0fb9bc920c367d4a6333ddda2863993.svg\" style=\"vertical-align:-17.3pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"B_n = \\underset{первая выплата}{\\mathop{ левая круглая скобка 0,2S плюс дробь, числитель — S, знаменатель — n правая круглая скобка }} плюс \\underset{вторая выплата}{\\mathop{ левая круглая скобка 0,2 умножить на дробь, числитель — (n минус 1)S, знаменатель — n плюс дробь, числитель — S, знаменатель — n правая круглая скобка }} плюс ... плюс \\underset{n минус я выплата}{\\mathop{ левая круглая скобка 0,2 умножить на дробь, числитель — S, знаменатель — n плюс дробь, числитель — S, знаменатель — n правая круглая скобка }}=\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/0c/0cdf5ba667967da47bcbae5f9c622bf1.svg\" style=\"vertical-align:-19.4pt\"/></p><p><img alt=\"= n умножить на дробь, числитель — S, знаменатель — n плюс \\underset{суммаарифм.прогрессии}{\\mathop{0,2 умножить на дробь, числитель — S плюс дробь, числитель — S, знаменатель — n , знаменатель — { 2} умножить на n}} =S плюс 0,1S умножить на (n плюс 1).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d0/d0fb9bc920c367d4a6333ddda2863993.svg\" style=\"vertical-align:-17.3pt\"/></p><p class=\"left_margin\">По условию сумма выплат составит 7,5 млн рублей:</p><center><p><img alt=\"5 плюс 0,1 умножить на 5 умножить на (n плюс 1) = 7,5 равносильно 0,5 умножить на (n плюс 1) = 2,5 равносильно n плюс 1=5 равносильно n=4\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/03/030c5a14da54c50ab8bcf46f5bdf5b35.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"5 плюс 0,1 умножить на 5 умножить на (n плюс 1) = 7,5 равносильно 0,5 умножить на (n плюс 1) = 2,5 равносильно n плюс 1=5 равносильно n=4\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/03/030c5a14da54c50ab8bcf46f5bdf5b35.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\">Значит, кредит планируется взять на 4 года.</p><p> <span style=\"letter-spacing: 2px;\">Ответ:</span> 4 года.</p>",
        criteria: [
            {
                text: "Обоснованно получен верный ответ",
                score: 3
            },
            {
                text: "Верно построена математическая модель, решение сведено к исследованию этой модели и получен результат:— неверный ответ из-за вычислительной ошибки;— верный ответ, но решение недостаточно обосновано",
                score: 2
            },
            {
                text: "Верно построена математическая модель, решение сведено к исследованию этой модели, при этом решение может быть не завершено",
                score: 1
            },
            {
                text: " Решение не соответствует ни одному из критериев, перечисленных выше",
                score: 0
            }
        ]
    },
    {
        id: 541383,
        num: "18",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">Найдите все значения параметра <i>a</i>, при каждом из которых уравнение</p><center><p><img alt=\" дробь, числитель — 9x в степени 2 минус a в степени 2 , знаменатель — x в степени 2 плюс 8x плюс 16 минус a в степени 2 =0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/5d/5d454a2a832045df2e49e7285f8b7995.svg\" style=\"vertical-align:-9.3pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — 9x в степени 2 минус a в степени 2 , знаменатель — x в степени 2 плюс 8x плюс 16 минус a в степени 2 =0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/5d/5d454a2a832045df2e49e7285f8b7995.svg\" style=\"vertical-align:-9.3pt\"/></p><p>имеет ровно два различных корня.</p>",
        solution_content: "<p class=\"left_margin\">Преобразуем уравнение, используя формулы сокращённого умножения:</p><center><p><img alt=\" дробь, числитель — 9x в степени 2 минус a в степени 2 , знаменатель — x в степени 2 плюс 8x плюс 16 минус a в степени 2 =0 равносильно дробь, числитель — (3x минус a)(3x плюс a), знаменатель — (x плюс 4) в степени 2 минус a в степени 2 =0 равносильно дробь, числитель — (3x минус a)(3x плюс a), знаменатель — (x плюс 4 минус a)(x плюс 4 плюс a) =0 равносильно система выражений совокупность выражений a=3x,a= минус 3x, конец системы . a не равно x плюс 4,a не равно минус x минус 4. конец совокупности . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/bf/bf0fb27216bd012b2ec89114742f7af8.svg\" style=\"vertical-align:-30.9pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — 9x в степени 2 минус a в степени 2 , знаменатель — x в степени 2 плюс 8x плюс 16 минус a в степени 2 =0 равносильно дробь, числитель — (3x минус a)(3x плюс a), знаменатель — (x плюс 4) в степени 2 минус a в степени 2 =0 равносильно дробь, числитель — (3x минус a)(3x плюс a), знаменатель — (x плюс 4 минус a)(x плюс 4 плюс a) =0 равносильно система выражений совокупность выражений a=3x,a= минус 3x, конец системы . a не равно x плюс 4,a не равно минус x минус 4. конец совокупности . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/bf/bf0fb27216bd012b2ec89114742f7af8.svg\" style=\"vertical-align:-30.9pt\"/></p><p> </p><p><img src=\"https://ege.sdamgia.ru/get_file?id=51556\" style=\"margin:10px auto;display:block;max-width:100%\"/></p><p class=\"left_margin\">Изобразим решение полученной системы на плоскости <i>xOa</i>. Графиком системы (изображено синим) будет совокупность двух прямых <img alt=\"a=3x,a= минус 3x,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6c/6c7187e8495bb9283fcb4d25f175d147.svg\" style=\"vertical-align:-3.0pt\"/> исключая точки, которые лежат на прямых <img alt=\"a=x плюс 4,a= минус x минус 4,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ac/ac19051ea307f4c798aa64e59cac9d0e.svg\" style=\"vertical-align:-3.0pt\"/> а именно: точки <img alt=\"( минус 1;3),( минус 1; минус 3),(2;6),(2; минус 6).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/03/0328f003a61fa198fdb0991c760850ea.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\">Таким образом, исходное уравнение имеет ровно два различных корня при </p><center><p><img alt=\"a меньше минус 6; минус 6 меньше a меньше минус 3; минус 3 меньше a меньше 0;0 меньше a меньше 3;3 меньше a меньше 6;иa больше 6. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/69/6955fd2551349fd4443c79a7cca87091.svg\" style=\"vertical-align:-2.2pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"a меньше минус 6; минус 6 меньше a меньше минус 3; минус 3 меньше a меньше 0;0 меньше a меньше 3;3 меньше a меньше 6;иa больше 6. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/69/6955fd2551349fd4443c79a7cca87091.svg\" style=\"vertical-align:-2.2pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\"( минус принадлежит fty; минус 6)\\cup( минус 6; минус 3)\\cup( минус 3;0)\\cup(0;3)\\cup(3;6)\\cup(6; плюс принадлежит fty).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ab/ab92a2b6ec0456b0b2a0f81cebefaca4.svg\" style=\"vertical-align:-3.6pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получен правильный ответ.",
                score: 4
            },
            {
                text: "С помощью верного рассуждения получены все значения a, но некоторые граничные точки включены/исключены неверно.",
                score: 3
            },
            {
                text: "С помощью верного рассуждения получены не все значения a.",
                score: 2
            },
            {
                text: "Задача верно сведена к исследованию взаимного расположения графика функции и прямой (аналитически или графически).",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 541384,
        num: "19",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В течение <i>n</i> дней каждый день на доску записывают натуральные числа, каждое из которых меньше 6. При этом каждый день (кроме первого) сумма чисел, записанных на доску в этот день, больше, а количество меньше, чем в предыдущий день.</p><p class=\"left_margin\">а) Может ли <i>n</i> быть больше 5?</p><p class=\"left_margin\">б) Может ли среднее арифметическое чисел, записанных в первый день, быть меньше 3, а среднее арифметическое всех чисел, записанных за все дни, быть больше 4?</p><p class=\"left_margin\">в) Известно, что сумма чисел, записанных в первый день, равна 6. Какое наибольшее значение может принимать сумма всех чисел за эти дни?</p>",
        solution_content: "<p class=\"left_margin\">а) Да. Например в первый день выписано 20 единиц, а в каждый следующий день выписывают на две единицы меньше, зато добавляют тройку. Тогда количество чисел каждый день на 1 меньше, а сумма — на 1 больше, чем в предыдущий.</p><p class=\"left_margin\">б) Да. Если в первый день выписали одну 2 и десять 3 (средний балл 32/11), во второй день шесть 4 и четыре 5 (средний балл 4,4), а в третий день девять 5 (средний балл 5), то все условия выполнены, причем средний балл первого дня меньше 3, а средний балл за все дни <img alt=\" дробь, числитель — 32 плюс 44 плюс 45, знаменатель — 11 плюс 10 плюс 9 = дробь, числитель — 121, знаменатель — 30 больше 4.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/43/439cb9887ee7a91bb666416b6c174c41.svg\" style=\"vertical-align:-9.2pt\"/></p><p class=\"left_margin\">в) Ясно, что в первый день записано не более 6 чисел. Тогда:</p><p>− во второй день не более пяти чисел с суммой не менее 7;</p><p>− в третий день не более четырех чисел с суммой не менее 8;</p><p>− в четвертый день не более трех чисел с суммой не менее 9;</p><p>− в пятый день не более двух чисел с суммой не менее 10.</p><p class=\"left_margin\">Уже это возможно единственным образом — две пятерки. Значит, если в пятый день что-то вообще писали, то общая сумма составит <img alt=\"6 плюс 7 плюс 8 плюс 9 плюс 10=40.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7e/7eb93d2bd93512f4779b76bd79623309.svg\" style=\"vertical-align:-1.8pt\"/> Если числа писали лишь четыре дня, то в четвертый день было не более трех чисел, а их сумма была не более 15, поэтому общая сумма не превосходит <img alt=\"6 плюс 13 плюс 14 плюс 15=48.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e9/e96cedb9dc3864b4392f1690ad9f2818.svg\" style=\"vertical-align:-1.8pt\"/> Если числа писали лишь три дня, то в третий день было не более четырех чисел, а их сумма была не более 20, поэтому общая сумма не превосходит <img alt=\"6 плюс 19 плюс 20=45.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/cc/cc7483dad0049be1cdf43ddaa2c305fc.svg\" style=\"vertical-align:-1.8pt\"/> Если числа писали лишь два дня, то во второй день было не более пяти чисел, а их сумма была не более 25, поэтому общая сумма не превосходит <img alt=\"6 плюс 25=31.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/89/899a6f23a3ab961f2e0019da8f58fdef.svg\" style=\"vertical-align:-1.8pt\"/> Итак, ответ точно не больше 48. </p><p class=\"left_margin\">Осталось привести соответствующий пример:</p><p>− первый день:  1, 1, 1, 1, 1, 1.</p><p>− второй день: 2, 2, 3, 3, 3.</p><p>− третий день: 3, 3, 4, 4.</p><p>− четвертый день: 5, 5, 5.</p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> а) да, б) да, в) 48.</p><p> </p><p><b>Примечание.</b></p><p class=\"left_margin\">Рекомендуем сравнить это задание с заданиями 526541 и 526345 из основной волны ЕГЭ 2019 года.</p>",
        criteria: [
            {
                text: "Верно получены все перечисленные (см. критерий на 1 балл) результаты.",
                score: 4
            },
            {
                text: "Верно получены три из перечисленных (см. критерий на 1 балл) результатов.",
                score: 3
            },
            {
                text: "Верно получены два из перечисленных (см. критерий на 1 балл) результатов.",
                score: 2
            },
            {
                text: "Верно получен один из следующих результатов:— обоснованное решение в п. а;— пример в п. б;— искомая оценка в п. в;— пример в п. в, обеспечивающий точность предыдущей оценки.",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 541810,
        num: "1",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Шоколадка стоит 30 рублей. В воскресенье в супермаркете действует специальное предложение: заплатив за три шоколадки, покупатель получает четыре (одну — в подарок). Какое наибольшее количество шоколадок можно получить, потратив не более 140 рублей в воскресенье?</p>",
        solution_content: "<p class=\"left_margin\">Разделим 140 на 30:</p><center><p><img alt=\" дробь, числитель — 140, знаменатель — 30 =4,6.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/cf/cf2d6dfaa9551ef82aa97ed80e113cdb.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — 140, знаменатель — 30 =4,6.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/cf/cf2d6dfaa9551ef82aa97ed80e113cdb.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\">Значит, можно будет купить 4 шоколадки. Еще 1 будет дана в подарок.  Всего можно будет получить 5 шоколадок.</p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 5.</p>",
        correct_answer: "5"
    },
    {
        id: 541811,
        num: "2",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">На диаграмме показано распределение выплавки меди в 11 странах мира (в тысячах тонн) за 2006 год. Среди представленных стран первое место по выплавке меди занимала Папуа–Новая Гвинея, одиннадцатое место — Индия. Какое место занимала Болгария? </p><p><img src=\"https://ege.sdamgia.ru/get_file?id=51755\" style=\"margin:10px auto;display:block;max-width:100%\"/></p>",
        solution_content: "<p class=\"left_margin\">Из графика видно, что Болгария занимает 6 место. </p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 6.</p>",
        correct_answer: "6"
    },
    {
        id: 541812,
        num: "3",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=65972\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">На клетчатой бумаге с размером клетки 1×1 изображён ромб. Найдите его площадь.</p>",
        solution_content: "<p class=\"left_margin\">Площадь ромба равна половине произведений диагоналей: <img alt=\"S= дробь, числитель — 1, знаменатель — 2 умножить на 2 умножить на 8 = 8.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/63/63925a35572d770d50fe7ec8fb6ed1aa.svg\" style=\"vertical-align:-8.4pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 8.</p>",
        correct_answer: "8"
    },
    {
        id: 541813,
        num: "4",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Вероятность того, что в случайный момент времени температура тела здорового человека окажется ниже чем 36,8 °<i>C</i>, равна 0,91. Найдите вероятность того, что в случайный момент времени у здорового человека температура окажется 36,8 °<i>C</i> или выше.</p>",
        solution_content: "<p class=\"left_margin\">Указанные события противоположны, поэтому искомая вероятность равна <nobr>1 − 0,91 = 0,09.</nobr></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 0,09.</p>",
        correct_answer: "0,09"
    },
    {
        id: 541814,
        num: "5",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Найдите корень уравнения <img alt=\" логарифм по основанию 3 (15 минус x)= логарифм по основанию 3 7.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ef/ef749a3fd106497d7eb62d53ddc16dd4.svg\" style=\"vertical-align:-3.7pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Решим уравнение: </p><center><p><img alt=\" логарифм по основанию 3 (15 минус x)= логарифм по основанию 3 7 равносильно 15 минус x=7 равносильно x=8.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b7/b7dfbd996a698ff913ed21c093a71ac7.svg\" style=\"vertical-align:-3.7pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" логарифм по основанию 3 (15 минус x)= логарифм по основанию 3 7 равносильно 15 минус x=7 равносильно x=8.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b7/b7dfbd996a698ff913ed21c093a71ac7.svg\" style=\"vertical-align:-3.7pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 8.</p>",
        correct_answer: "8"
    },
    {
        id: 541815,
        num: "6",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=53577\" style=\"float:right;margin:10px;max-width:100%; width:20%\"/></p><p class=\"left_margin\">В треугольнике <i>ABC</i> сторона <i>AB</i> равна <img alt=\"2 корень из { 3},\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/94/9404b4eabeb94db093dd02dfa2201a03.svg\" style=\"vertical-align:-3.1pt\"/>  угол <i>С</i> равен 120°. Найдите радиус описанной около этого треугольника окружности.</p>",
        solution_content: "<p class=\"left_margin\">Воспользуемся теоремой синусов: </p><center><p><img alt=\" дробь, числитель — AB, знаменатель — синус \\angle C = 2R равносильно R= дробь, числитель — AB, знаменатель — 2 синус \\angle C = дробь, числитель — 2 корень из { 3}, знаменатель — 2 синус 120 в степени circ =2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/fa/fa66115bf2b1a7eacddd27d3dc542ad4.svg\" style=\"vertical-align:-8.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — AB, знаменатель — синус \\angle C = 2R равносильно R= дробь, числитель — AB, знаменатель — 2 синус \\angle C = дробь, числитель — 2 корень из { 3}, знаменатель — 2 синус 120 в степени circ =2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/fa/fa66115bf2b1a7eacddd27d3dc542ad4.svg\" style=\"vertical-align:-8.6pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 2.</p>",
        correct_answer: "2"
    },
    {
        id: 541816,
        num: "7",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=64992\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">На рисунке изображены график функции <img alt=\"y=f(x)\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7c/7c1c9491ba7c6e8d6d2cfa82e39b22ca.svg\" style=\"vertical-align:-3.6pt\"/> и касательная к нему в точке с абсциссой <img alt=\"x_0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2e/2e9c23c4d754e38e4b358a1744420252.svg\" style=\"vertical-align:-2.6pt\"/> Найдите значение производной функции <img alt=\"f(x)\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/50/50bbd36e1fd2333108437a2ca378be62.svg\" style=\"vertical-align:-3.6pt\"/> в точке <img alt=\"x_0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2e/2e9c23c4d754e38e4b358a1744420252.svg\" style=\"vertical-align:-2.6pt\"/></p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=64994\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">Значение производной в точке касания равно угловому коэффициенту касательной, который в свою очередь равен тангенсу угла наклона данной касательной к оси абсцисс:</p><center><p><img alt=\"y'(x_0) = тангенс \\angle \\alpha = дробь, числитель — 9, знаменатель — 5 =1,8\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d3/d356c09e330f31469d330eff63cd1a1b.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"y'(x_0) = тангенс \\angle \\alpha = дробь, числитель — 9, знаменатель — 5 =1,8\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d3/d356c09e330f31469d330eff63cd1a1b.svg\" style=\"vertical-align:-8.5pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 1,8.</p>",
        correct_answer: "1,8"
    },
    {
        id: 541817,
        num: "8",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=66985\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">Через среднюю линию основания треугольной призмы проведена плоскость, параллельная боковому ребру. Найдите объём этой призмы, если объём отсечённой треугольной призмы равен 7.</p>",
        solution_content: "<p class=\"left_margin\">Площадь основания отсеченной части меньше площади основания всей призмы в 4 раза (так как и высота и основание треугольника уменьшились в 2 раза). Высоты обеих частей призмы одинаковы, поэтому объем отсеченной части в 4 раза меньше объема целой призмы. Тем самым, он равен 28.</p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 28.</p>",
        correct_answer: "28"
    },
    {
        id: 541818,
        num: "9",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Найдите значение выражения <img alt=\" дробь, числитель — (3 корень из { 8}) в степени 2 , знаменатель — 6 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/00/0081525894931b3100cbb7e3e10f4278.svg\" style=\"vertical-align:-8.6pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Вычислим:</p><center><p><img alt=\" дробь, числитель — (3 корень из { 8}) в степени 2 , знаменатель — 6 = дробь, числитель — 9 умножить на 8, знаменатель — 6 =12.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/90/90bb4788b3e31059d5b400db184c0aa7.svg\" style=\"vertical-align:-8.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — (3 корень из { 8}) в степени 2 , знаменатель — 6 = дробь, числитель — 9 умножить на 8, знаменатель — 6 =12.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/90/90bb4788b3e31059d5b400db184c0aa7.svg\" style=\"vertical-align:-8.6pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 12.</p>",
        correct_answer: "12"
    },
    {
        id: 541819,
        num: "10",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Два тела, массой <i>m </i> = 6 кг каждое, движутся с одинаковой скоростью <i>v</i> = 9 м/c под углом <img alt=\"2\\alpha\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4b/4b665bcadbe886cbf7faf638e11c3887.svg\" style=\"vertical-align:-1.8pt\"/> друг к другу. Энергия (в Дж), выделяющаяся при их абсолютно неупругом соударении, вычисляется по формуле <img alt=\"Q=mv в степени 2 синус в степени 2 \\alpha\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/80/80e431e477fa4d64ffce964873c2b439.svg\" style=\"vertical-align:-3.0pt\"/> , где <i>m</i> — масса (в кг), <i>v</i> — скорость (в м/с). Найдите, под каким углом <img alt=\"2\\alpha\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4b/4b665bcadbe886cbf7faf638e11c3887.svg\" style=\"vertical-align:-1.8pt\"/> должны двигаться тела, чтобы в результате соударения выделилась энергия, равная 243 Дж. Ответ дайте в градусах.</p>",
        solution_content: "<p class=\"left_margin\">Задача сводится к решению уравнения <img alt=\"Q= 243\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/57/572d1d6f696ed339e1a4785fb27b7b3f.svg\" style=\"vertical-align:-3.0pt\"/> Дж на полуинтервале <img alt=\"2\\alpha принадлежит (0{} в степени circ ; 180{} в степени circ ]\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/40/40334a6e17dc36c23ca8e356dac406d8.svg\" style=\"vertical-align:-3.6pt\"/> при заданных значениях массы тел <img alt=\"m=6\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/f7/f711d4255917d40a68d272b8464223cc.svg\" style=\"vertical-align:-1.8pt\"/> кг и их скоростей <img alt=\"v=9\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c1/c164eb83dab59c5224e6e28acabb236b.svg\" style=\"vertical-align:-1.8pt\"/> м/с:\t</p><p align=\"center\"><img alt=\"m{{v} в степени 2 }{{ синус } в степени 2 }\\alpha=243 равносильно 486 синус в степени 2 \\alpha = 243 равносильно {{ синус } в степени 2 }\\alpha= дробь, числитель — 1, знаменатель — 2 \\underset{0 в степени circ меньше \\alpha меньше или равно 90 в степени circ }{\\mathop{ равносильно }} синус \\alpha = дробь, числитель — 1, знаменатель — корень из { 2 } \\underset{0 в степени circ меньше \\alpha меньше или равно 90 в степени circ }{\\mathop{ равносильно }}\\alpha ={{45} в степени \\circ }.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/97/978e2cec6bfe90b147af273717186305.svg\" style=\"vertical-align:-10.9pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 90.</p>",
        correct_answer: "90"
    },
    {
        id: 541820,
        num: "11",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Имеется два сплава. Первый сплав содержит 45% меди, второй — 20% меди. Масса первого сплава больше массы второго на 30 кг. Из этих двух сплавов получили третий сплав, содержащий 40% меди. Найдите массу третьего сплава. Ответ дайте в килограммах.</p>",
        solution_content: "<p class=\"left_margin\">Пусть масса первого сплава <img alt=\"m\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6f/6f8f57715090da2632453988d9a1501b.svg\" style=\"vertical-align:-1.8pt\"/> кг, а масса второго — <img alt=\"m минус 30\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/5b/5b5ef32f23508263405fa1a7486b1638.svg\" style=\"vertical-align:-1.8pt\"/> кг, масса третьего сплава — <img alt=\"2m минус 30\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/85/85173a45649a7645affef85febef40b7.svg\" style=\"vertical-align:-1.8pt\"/> кг. Первый сплав содержит 45% меди, второй — 20% меди, третий сплав — 40% меди. Тогда:</p><center><p><img alt=\"0,45m плюс 0,2(m минус 30)=0,4(2m минус 30) равносильно m=40.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/26/2678a4c9a6983f28ff76e948344d2436.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"0,45m плюс 0,2(m минус 30)=0,4(2m минус 30) равносильно m=40.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/26/2678a4c9a6983f28ff76e948344d2436.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\">Таким образом, масса третьего сплава равна 50 кг.</p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 50.</p>",
        correct_answer: "50"
    },
    {
        id: 541821,
        num: "12",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Найдите точку минимума функции <img alt=\"y=x в степени дробь, числитель — 3, знаменатель — 2 минус 21x плюс 11.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/5a/5a5ff83e5d37c654d110dbb4b39e6b1b.svg\" style=\"vertical-align:-3.0pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Функция определена на<img alt=\"[0; плюс принадлежит fty).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/71/719597ed7fd7ada9ac80ee92cd4c5782.svg\" style=\"vertical-align:-3.6pt\"/> Найдём её производную: </p><center><p><img alt=\"y'(x)= дробь, числитель — 3, знаменатель — 2 x в степени дробь, числитель — 1, знаменатель — 2 минус 21.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/f6/f654a76b91d8b87728056978cae6d7dc.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"y'(x)= дробь, числитель — 3, знаменатель — 2 x в степени дробь, числитель — 1, знаменатель — 2 минус 21.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/f6/f654a76b91d8b87728056978cae6d7dc.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\">Найдем нули производной: </p><center><p><img alt=\" дробь, числитель — 3, знаменатель — 2 x в степени дробь, числитель — 1, знаменатель — 2 минус 21=0 равносильно x в степени дробь, числитель — 1, знаменатель — 2 =14 равносильно x=196. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a1/a1ad89aaf9435e5b5d5d6f7d799509ea.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — 3, знаменатель — 2 x в степени дробь, числитель — 1, знаменатель — 2 минус 21=0 равносильно x в степени дробь, числитель — 1, знаменатель — 2 =14 равносильно x=196. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a1/a1ad89aaf9435e5b5d5d6f7d799509ea.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\">Определим знаки производной функции и изобразим на рисунке поведение функции:</p><p><img src=\"https://ege.sdamgia.ru/get_file?id=67931\" style=\"margin:10px auto;display:block;max-width:100%\"/></p><p class=\"left_margin\"> </p><p class=\"left_margin\">Искомая точка минимума <img alt=\"x_{min}=196.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/f9/f9a00513417c80b39283f99762f05864.svg\" style=\"vertical-align:-2.5pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 196.</p>",
        correct_answer: "196"
    },
    {
        id: 541822,
        num: "13",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">а) Решите уравнение <img alt=\"2 косинус в степени 3 x минус косинус в степени 2 x плюс 2 косинус x минус 1=0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/72/72c5aa18eabdb43fec9e58eb2cd0ae6d.svg\" style=\"vertical-align:-1.8pt\"/></p><p class=\"left_margin\">б) Найдите все корни этого уравнения, принадлежащие отрезку <img alt=\" левая квадратная скобка 2 Пи ; дробь, числитель — 7 Пи , знаменатель — 2 правая квадратная скобка .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/0a/0a7799ce52b26b25b4c6a1f12b66330a.svg\" style=\"vertical-align:-11.1pt\"/></p>",
        solution_content: "<p class=\"left_margin\">a) Сгруппируем слагаемые и разложим левую часть уравнения на множители:</p><center><p><img alt=\"2 косинус в степени 3 x минус косинус в степени 2 x плюс 2 косинус x минус 1=0 равносильно 2 косинус x( косинус в степени 2 x плюс 1) минус ( косинус в степени 2 x плюс 1)=0 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9e/9ed8a5703df1e826acaf467993ceef78.svg\" style=\"vertical-align:-3.6pt\"/></p><p><img alt=\" равносильно ( косинус в степени 2 x плюс 1)(2 косинус x минус 1)=0 равносильно 2 косинус x минус 1=0 равносильно косинус x= дробь, числитель — 1, знаменатель — 2 равносильно x=\\pm дробь, числитель — Пи , знаменатель — 3 плюс 2 Пи k,k принадлежит Z .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/35/35e7c2b601146ba99e6087b5b1b7b9f6.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"2 косинус в степени 3 x минус косинус в степени 2 x плюс 2 косинус x минус 1=0 равносильно 2 косинус x( косинус в степени 2 x плюс 1) минус ( косинус в степени 2 x плюс 1)=0 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9e/9ed8a5703df1e826acaf467993ceef78.svg\" style=\"vertical-align:-3.6pt\"/></p><p><img alt=\" равносильно ( косинус в степени 2 x плюс 1)(2 косинус x минус 1)=0 равносильно 2 косинус x минус 1=0 равносильно косинус x= дробь, числитель — 1, знаменатель — 2 равносильно x=\\pm дробь, числитель — Пи , знаменатель — 3 плюс 2 Пи k,k принадлежит Z .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/35/35e7c2b601146ba99e6087b5b1b7b9f6.svg\" style=\"vertical-align:-8.4pt\"/></p><p><img src=\"https://ege.sdamgia.ru/get_file?id=63174\" style=\"float:right;margin:10px;max-width:100%;width:20%\"/></p><p> </p><p> </p><p class=\"left_margin\">б) С помощью числовой окружности отберём корни уравнения, принадлежащие отрезку <img alt=\" левая квадратная скобка 2 Пи ; дробь, числитель — 7 Пи , знаменатель — 2 правая квадратная скобка .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/0a/0a7799ce52b26b25b4c6a1f12b66330a.svg\" style=\"vertical-align:-11.1pt\"/> Получим числа <img alt=\" дробь, числитель — 7 Пи , знаменатель — 3 \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ab/abb31cb29132decf8fb829528f1f6e92.svg\" style=\"vertical-align:-8.5pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> а) <img alt=\"\\pm дробь, числитель — Пи , знаменатель — 3 плюс 2 Пи k,k принадлежит Z ;\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/81/81b15d81c04666b344348ba97e4191bb.svg\" style=\"vertical-align:-8.4pt\"/>  б) <img alt=\" дробь, числитель — 7 Пи , знаменатель — 3 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ca/ca1f3ad56de78a7423aee0d54febd730.svg\" style=\"vertical-align:-8.5pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получены верные ответы в обоих пунктах.",
                score: 2
            },
            {
                text: "Обоснованно получен верный ответ в пункте а),ИЛИполучены неверные ответы из-за вычислительной ошибки, но при этом имеется верная последовательность всех шагов решения пункта а) и пункта б).",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 541823,
        num: "14",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В правильной четырёхугольной пирамиде <i>SABCD</i> сторона основания <i>AB</i> равна 6, а боковое ребро <i>SA</i> = 7. На рёбрах <i>CD</i> и <i>SC</i> отмечены точки <i>N</i> и <i>K</i> соответственно, причём <i>DN</i> : <i>NC</i> = <i>SK</i> : <i>KC</i> = 1 : 2. Плоскость α содержит прямую <i>KN</i> и параллельна прямой <i>BC</i>.</p><p class=\"left_margin\">а) Докажите, что плоскость α параллельна <i>SA</i> </p><p class=\"left_margin\">б) Найдите угол между плоскостями <img alt=\"\\alpha\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7b/7b7f9dbfea05c83784f8b85149852f08.svg\" style=\"vertical-align:-1.8pt\"/> и <i>SBC</i>.</p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=61513\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">а) Построим прямую <i>MN</i> параллельна <i>CB</i> и <i>KP</i> параллельна <i>CB</i>, <img alt=\"M принадлежит AB, P принадлежит SB\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/86/8645224b3bb52364863003c937804182.svg\" style=\"vertical-align:-3.0pt\"/>. Плоскость <i>NMP</i> параллельна <i>BC</i> и содержит<i> NK</i>, таким образом <i>NMP</i> искомая плоскость α. По теореме о пропорциональных отрезках  имеем: <img alt=\" дробь, числитель — SP, знаменатель — PB = дробь, числитель — AM, знаменатель — MB \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c4/c414e5999b3d8c3a4f19d9d20cee178c.svg\" style=\"vertical-align:-8.3pt\"/>. Таким образом, <i>PM</i> параллельна <i>SA</i>, значит, <i>SA </i> параллельна α. </p><p class=\"left_margin\">б) Заметим, что <i>NM</i> параллельна <i>DA</i> и <i>SA</i> параллельна <i>PM</i> , тогда <i>SDA ||</i> <img alt=\"\\alpha\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7b/7b7f9dbfea05c83784f8b85149852f08.svg\" style=\"vertical-align:-1.8pt\"/>. Имеем, что угол между <img alt=\"\\alpha\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7b/7b7f9dbfea05c83784f8b85149852f08.svg\" style=\"vertical-align:-1.8pt\"/> и плоскость <i>SBC</i> равен углу между плоскостями <i>SBC</i> и <i>SDA</i>. Тогда искомый угол равен двум углам <i>FSO</i>, где<i> F</i> — середина <i>BC</i>, а<i> O</i> — основание высоты пирамиды.  Таким образом, </p><center><p><img alt=\" синус \\angle FSO = дробь, числитель — OF, знаменатель — SF = дробь, числитель — 3, знаменатель — корень из { 49 минус 9 }= дробь, числитель — 3, знаменатель — 2 корень из { 10 }. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1f/1f399953e25bee300d802e09245cd412.svg\" style=\"vertical-align:-10.9pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" синус \\angle FSO = дробь, числитель — OF, знаменатель — SF = дробь, числитель — 3, знаменатель — корень из { 49 минус 9 }= дробь, числитель — 3, знаменатель — 2 корень из { 10 }. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1f/1f399953e25bee300d802e09245cd412.svg\" style=\"vertical-align:-10.9pt\"/></p><p> Тогда искомый угол <img alt=\"\\alpha = 2\\arcsin дробь, числитель — 3, знаменатель — 2 корень из { 10 }.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/62/622082944e749b1ca4712710d36efdec.svg\" style=\"vertical-align:-11.0pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\" 2\\arcsin дробь, числитель — 3, знаменатель — 2 корень из { 10 }. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4c/4c82c8bc5d90ea546944062e46a47185.svg\" style=\"vertical-align:-11.0pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получены верные ответы в пунктах а) и б)",
                score: 2
            },
            {
                text: "Выполнен только один из пунктов а) или б)",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, приведённых выше",
                score: 0
            }
        ]
    },
    {
        id: 541824,
        num: "15",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">Решите неравенство <img alt=\" логарифм по основанию 3 левая круглая скобка левая круглая скобка 2 минус x)(x в степени 2 плюс 5 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 3 левая круглая скобка x в степени 2 минус 5x плюс 6 правая круглая скобка плюс логарифм по основанию 3 левая круглая скобка 4 минус x правая круглая скобка .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/34/343c8b5504601b48db3d15101c70ea13.svg\" style=\"vertical-align:-4.7pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Воспользуемся свойством логарифма</p><center><p><img alt=\" логарифм по основанию 3 левая круглая скобка левая круглая скобка 2 минус x)(x в степени 2 плюс 5 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 3 левая круглая скобка x в степени 2 минус 5x плюс 6 правая круглая скобка плюс логарифм по основанию 3 левая круглая скобка 4 минус x правая круглая скобка равносильно система выражений логарифм по основанию 3 левая круглая скобка левая круглая скобка 2 минус x)(x в степени 2 плюс 5 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 3 левая круглая скобка (x в степени 2 минус 5x плюс 6)(4 минус x) правая круглая скобка ,4 минус x больше 0 конец системы . равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/37/37b95a736f0d11f04dd0dee5bcdcd1aa.svg\" style=\"vertical-align:-14.4pt\"/></p><p><img alt=\" равносильно система выражений левая круглая скобка 2 минус x)(x в степени 2 плюс 5 правая круглая скобка больше или равно левая круглая скобка x в степени 2 минус 5x плюс 6 правая круглая скобка левая круглая скобка 4 минус x правая круглая скобка ,4 минус x больше 0,x в степени 2 минус 5x плюс 6 больше 0 конец системы . равносильно система выражений левая круглая скобка 2 минус x)(x в степени 2 плюс 5 правая круглая скобка больше или равно левая круглая скобка x минус 3 правая круглая скобка левая круглая скобка x минус 2 правая круглая скобка левая круглая скобка 4 минус x правая круглая скобка ,x меньше 4,x в степени 2 минус 5x плюс 6 больше 0 конец системы . равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a8/a85ab7790e7761767323be0b37318863.svg\" style=\"vertical-align:-21.0pt\"/></p><p><img alt=\" равносильно система выражений (2 минус x)(x в степени 2 плюс 5 минус x в степени 2 плюс 7x минус 12) больше или равно 0,x меньше 4,x в степени 2 минус 5x плюс 6 больше 0 конец системы . равносильно система выражений (2 минус x)(7x минус 7)\\ge0,x меньше 4,(x минус 2)(x минус 3) больше 0 конец системы . равносильно 1 меньше или равно x меньше 2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9d/9de5d28daa8047f0db7bdc2a9f000b23.svg\" style=\"vertical-align:-21.0pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" логарифм по основанию 3 левая круглая скобка левая круглая скобка 2 минус x)(x в степени 2 плюс 5 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 3 левая круглая скобка x в степени 2 минус 5x плюс 6 правая круглая скобка плюс логарифм по основанию 3 левая круглая скобка 4 минус x правая круглая скобка равносильно система выражений логарифм по основанию 3 левая круглая скобка левая круглая скобка 2 минус x)(x в степени 2 плюс 5 правая круглая скобка правая круглая скобка больше или равно логарифм по основанию 3 левая круглая скобка (x в степени 2 минус 5x плюс 6)(4 минус x) правая круглая скобка ,4 минус x больше 0 конец системы . равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/37/37b95a736f0d11f04dd0dee5bcdcd1aa.svg\" style=\"vertical-align:-14.4pt\"/></p><p><img alt=\" равносильно система выражений левая круглая скобка 2 минус x)(x в степени 2 плюс 5 правая круглая скобка больше или равно левая круглая скобка x в степени 2 минус 5x плюс 6 правая круглая скобка левая круглая скобка 4 минус x правая круглая скобка ,4 минус x больше 0,x в степени 2 минус 5x плюс 6 больше 0 конец системы . равносильно система выражений левая круглая скобка 2 минус x)(x в степени 2 плюс 5 правая круглая скобка больше или равно левая круглая скобка x минус 3 правая круглая скобка левая круглая скобка x минус 2 правая круглая скобка левая круглая скобка 4 минус x правая круглая скобка ,x меньше 4,x в степени 2 минус 5x плюс 6 больше 0 конец системы . равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a8/a85ab7790e7761767323be0b37318863.svg\" style=\"vertical-align:-21.0pt\"/></p><p><img alt=\" равносильно система выражений (2 минус x)(x в степени 2 плюс 5 минус x в степени 2 плюс 7x минус 12) больше или равно 0,x меньше 4,x в степени 2 минус 5x плюс 6 больше 0 конец системы . равносильно система выражений (2 минус x)(7x минус 7)\\ge0,x меньше 4,(x минус 2)(x минус 3) больше 0 конец системы . равносильно 1 меньше или равно x меньше 2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9d/9de5d28daa8047f0db7bdc2a9f000b23.svg\" style=\"vertical-align:-21.0pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\"[1;2).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6c/6c931a7dfe6e0c7aa242b1e90a514141.svg\" style=\"vertical-align:-3.6pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получен верный ответ.",
                score: 2
            },
            {
                text: "Решение содержит вычислительную ошибку, возможно, приведшую к неверному ответу, но при этом имеется верная последовательность всех шагов решения.",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 541825,
        num: "16",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В треугольнике <i>ABC</i> угол <i>A </i>равен 120° . Прямые, содержащие высоты <i>BM</i> и <i>CN</i> треугольника <i>ABC</i>, пересекаются в точке <i>H</i>. Точка <i>O</i> — центр окружности, описанной около треугольника <i>ABC </i>.</p><p class=\"left_margin\">а) Докажите, что <i>AH = AO</i>.</p><p class=\"left_margin\">б) Найдите площадь треугольника <i>AHO</i>, если <i> BC = </i>3 , <img alt=\"\\angle ABC=15 в степени circ.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/56/56781105958289457ce56d4f8ecd2335.svg\" style=\"vertical-align:-1.8pt\"/></p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=63380\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">а) По теореме синусов имеем: <img alt=\"BC=2AO умножить на синус 120 в степени circ = AO корень из { 3}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/63/63871d35d8add273a8ac5ace77f499bd.svg\" style=\"vertical-align:-1.8pt\"/> Четырехугольник <i>MHNA</i> вписан в окружность с диаметром <i>AH</i>, тогда по теореме синусов для треугольника <i>MNA</i>  имеем: </p><center><p><img alt=\"MN =2R умножить на синус 120 в степени circ=AH умножить на синус 120 в степени circ = AH умножить на дробь, числитель — корень из { 3}, знаменатель — 2 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/32/327472e5d25ce9c63cba64e706676b76.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"MN =2R умножить на синус 120 в степени circ=AH умножить на синус 120 в степени circ = AH умножить на дробь, числитель — корень из { 3}, знаменатель — 2 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/32/327472e5d25ce9c63cba64e706676b76.svg\" style=\"vertical-align:-8.5pt\"/></p><p>  Треугольники <i>MAN</i> и <i>BAC</i> подобны так как </p><center><p><img alt=\" дробь, числитель — MA, знаменатель — AB = дробь, числитель — AN, знаменатель — AC = косинус 60 в степени circ = дробь, числитель — 1, знаменатель — 2 ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a0/a0623aa0e1d5c7087d08322072153d27.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — MA, знаменатель — AB = дробь, числитель — AN, знаменатель — AC = косинус 60 в степени circ = дробь, числитель — 1, знаменатель — 2 ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a0/a0623aa0e1d5c7087d08322072153d27.svg\" style=\"vertical-align:-8.4pt\"/></p><p> тогда <img alt=\"MN= дробь, числитель — 1, знаменатель — 2 BC.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c4/c44ab2d26e8d754162bfd5f47e003ef7.svg\" style=\"vertical-align:-8.4pt\"/> Подставляя получаем, </p><center><p><img alt=\" дробь, числитель — корень из { 3}, знаменатель — 2 AH = дробь, числитель — 1, знаменатель — 2 умножить на AO умножить на корень из { 3} равносильно AH=AO.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/72/720c1a983b4bc64797e37d9bb01bf0f9.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — корень из { 3}, знаменатель — 2 AH = дробь, числитель — 1, знаменатель — 2 умножить на AO умножить на корень из { 3} равносильно AH=AO.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/72/720c1a983b4bc64797e37d9bb01bf0f9.svg\" style=\"vertical-align:-8.5pt\"/></p><p> </p><p class=\"left_margin\">б) По теореме о вписанном угле <img alt=\"\\angle COA = 2 \\angle ABC = 2 умножить на 15 в степени circ= 30 в степени circ.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/82/82a429f49e71a041e0f44792deef6c89.svg\" style=\"vertical-align:-1.8pt\"/> Тогда </p><center><p><img alt=\"\\angle CAO = дробь, числитель — 180 в степени circ минус 30 в степени circ, знаменатель — 2 =75 в степени circ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/bb/bb9ab128e72cd433923ae5c374d61c21.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"\\angle CAO = дробь, числитель — 180 в степени circ минус 30 в степени circ, знаменатель — 2 =75 в степени circ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/bb/bb9ab128e72cd433923ae5c374d61c21.svg\" style=\"vertical-align:-8.4pt\"/></p><center><p><img alt=\"AH=AO= дробь, числитель — BC, знаменатель — корень из { 3 }= дробь, числитель — 3, знаменатель — корень из { 3 }= корень из { 3}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b7/b758a3e4a026783555ad441121ac8073.svg\" style=\"vertical-align:-10.9pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"AH=AO= дробь, числитель — BC, знаменатель — корень из { 3 }= дробь, числитель — 3, знаменатель — корень из { 3 }= корень из { 3}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b7/b758a3e4a026783555ad441121ac8073.svg\" style=\"vertical-align:-10.9pt\"/></p><p class=\"left_margin\">Найдем площадь треугольника </p><center><p><img alt=\"S_{AHO} = дробь, числитель — 1, знаменатель — 2 умножить на корень из { 3} в степени 2 умножить на синус 150 в степени circ = дробь, числитель — 3, знаменатель — 4 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/34/34d8090dbf0de20faaa576aa269fde7f.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"S_{AHO} = дробь, числитель — 1, знаменатель — 2 умножить на корень из { 3} в степени 2 умножить на синус 150 в степени circ = дробь, числитель — 3, знаменатель — 4 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/34/34d8090dbf0de20faaa576aa269fde7f.svg\" style=\"vertical-align:-8.4pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\" дробь, числитель — 3, знаменатель — 4 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/91/91bb53ccabd6642a2b9d4a0e0f10137c.svg\" style=\"vertical-align:-8.4pt\"/></p>",
        criteria: [
            {
                text: "Имеется верное доказательство утверждения пункта a) и обоснованно получен верный ответ в пункте б)",
                score: 3
            },
            {
                text: "Получен обоснованный ответ в пункте б)ИЛИимеется  верное  доказательство  утверждения  пункта  а)  и  при обоснованном  решении  пункта  б)  получен  неверный  ответ  из-за арифметической ошибки",
                score: 2
            },
            {
                text: "Имеется верное доказательство утверждения пункта а)ИЛИпри обоснованном решении пункта б) получен неверный ответ из-за арифметической ошибки, ИЛИобоснованно  получен  верный  ответ  в  пункте  б)  с  использованием утверждения пункта а), при этом пункт а) не выполнен",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, приведённых выше",
                score: 0
            }
        ]
    },
    {
        id: 541826,
        num: "17",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В июле планируется взять кредит в банке на сумму 10 млн рублей на некоторый срок (целое число лет). Условия его возврата таковы:</p><p class=\"left_margin\">— каждый январь долг возрастает на 10% по сравнению с концом предыдущего года;</p><p class=\"left_margin\">— с февраля по июнь каждого года необходимо выплатить часть долга;</p><p class=\"left_margin\">— в июле каждого года долг должен быть на одну и ту же сумму меньше долга на июль предыдущего года.</p><p class=\"left_margin\">На сколько лет планируется взять кредит, если известно, что общая сумма выплат после его полного погашения составит 15 млн рублей?</p>",
        solution_content: "<p class=\"left_margin\">Пусть кредит планируется взять на <i>n</i> лет. Долг перед банком (в млн рублей) по состоянию на июль должен уменьшаться до нуля равномерно:</p><center><p><img alt=\"10, дробь, числитель — 10(n минус 1), знаменатель — n ,..., дробь, числитель — 10 умножить на 2, знаменатель — n , дробь, числитель — 10, знаменатель — n ,0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/fe/fed2c4b91abe00ae825f17c1d6fb7de7.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"10, дробь, числитель — 10(n минус 1), знаменатель — n ,..., дробь, числитель — 10 умножить на 2, знаменатель — n , дробь, числитель — 10, знаменатель — n ,0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/fe/fed2c4b91abe00ae825f17c1d6fb7de7.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\">Выплаты (в млн рублей) должны быть следующими:</p><center><p><img alt=\"1 плюс дробь, числитель — 10, знаменатель — n , дробь, числитель — 1(n минус 1) плюс 10, знаменатель — n ,..., дробь, числитель — 1 умножить на 2 плюс 10, знаменатель — n , дробь, числитель — 1 плюс 10, знаменатель — n .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/cf/cf81fc9a823182282d71af3ee5f28ee7.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"1 плюс дробь, числитель — 10, знаменатель — n , дробь, числитель — 1(n минус 1) плюс 10, знаменатель — n ,..., дробь, числитель — 1 умножить на 2 плюс 10, знаменатель — n , дробь, числитель — 1 плюс 10, знаменатель — n .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/cf/cf81fc9a823182282d71af3ee5f28ee7.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\">Данная последовательность образует убывающую арифметическую прогрессию, сумма которой 15. По формуле суммы арифметической прогрессии <img alt=\"S= дробь, числитель — a_1 плюс a_n, знаменатель — 2 умножить на n\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/31/3187ced2e6e5a5f4ea898954b34d97af.svg\" style=\"vertical-align:-8.3pt\"/> имеем: </p><center><p><img alt=\" дробь, числитель — 1 плюс дробь, числитель — 10, знаменатель — n плюс дробь, числитель — 1 плюс 10, знаменатель — n , знаменатель — { 2} умножить на n=15 равносильно n = 9.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/45/45d02424ef4db6fdedaf40198f24b3c1.svg\" style=\"vertical-align:-8.4pt\"/> </p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — 1 плюс дробь, числитель — 10, знаменатель — n плюс дробь, числитель — 1 плюс 10, знаменатель — n , знаменатель — { 2} умножить на n=15 равносильно n = 9.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/45/45d02424ef4db6fdedaf40198f24b3c1.svg\" style=\"vertical-align:-8.4pt\"/> </p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 9 лет.</p>",
        criteria: [
            {
                text: "Обоснованно получен верный ответ",
                score: 3
            },
            {
                text: "Верно построена математическая модель, решение сведено к исследованию этой модели и получен результат:— неверный ответ из-за вычислительной ошибки;— верный ответ, но решение недостаточно обосновано",
                score: 2
            },
            {
                text: "Верно построена математическая модель, решение сведено к исследованию этой модели, при этом решение может быть не завершено",
                score: 1
            },
            {
                text: " Решение не соответствует ни одному из критериев, перечисленных выше",
                score: 0
            }
        ]
    },
    {
        id: 541827,
        num: "18",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">Найдите все значения параметра <i>a</i>, при каждом из которых уравнение</p><center><p><img alt=\" дробь, числитель — 4x в степени 2 минус a в степени 2 , знаменатель — x в степени 2 плюс 6x плюс 9 минус a в степени 2 =0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/f0/f067837125c7ebc061a505b2f646279b.svg\" style=\"vertical-align:-9.3pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — 4x в степени 2 минус a в степени 2 , знаменатель — x в степени 2 плюс 6x плюс 9 минус a в степени 2 =0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/f0/f067837125c7ebc061a505b2f646279b.svg\" style=\"vertical-align:-9.3pt\"/></p><p>имеет ровно два различных корня.</p>",
        solution_content: "<p class=\"left_margin\">Преобразуем уравнение, используя формулы сокращённого умножения:</p><center><p><img alt=\" дробь, числитель — 4x в степени 2 минус a в степени 2 , знаменатель — x в степени 2 плюс 6x плюс 9 минус a в степени 2 =0 равносильно дробь, числитель — (2x минус a)(2x плюс a), знаменатель — (x плюс 3) в степени 2 минус a в степени 2 =0 равносильно дробь, числитель — (2x минус a)(2x плюс a), знаменатель — (x плюс 3 минус a)(x плюс 3 плюс a) =0 равносильно система выражений совокупность выражений a=2x,a= минус 2x, конец системы . a не равно x плюс 3,a не равно минус x минус 3. конец совокупности . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/66/6691889f15f8ec18abaabdd5eeb342a0.svg\" style=\"vertical-align:-30.9pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — 4x в степени 2 минус a в степени 2 , знаменатель — x в степени 2 плюс 6x плюс 9 минус a в степени 2 =0 равносильно дробь, числитель — (2x минус a)(2x плюс a), знаменатель — (x плюс 3) в степени 2 минус a в степени 2 =0 равносильно дробь, числитель — (2x минус a)(2x плюс a), знаменатель — (x плюс 3 минус a)(x плюс 3 плюс a) =0 равносильно система выражений совокупность выражений a=2x,a= минус 2x, конец системы . a не равно x плюс 3,a не равно минус x минус 3. конец совокупности . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/66/6691889f15f8ec18abaabdd5eeb342a0.svg\" style=\"vertical-align:-30.9pt\"/></p><p><img src=\"https://ege.sdamgia.ru/get_file?id=62938\" style=\"margin:10px auto;display:block;max-width:100%; width:30%\"/></p><p class=\"left_margin\">Изобразим решение полученной системы на плоскости <i>xOa</i>. Графиком системы (изображено синим) будет совокупность двух прямых <img alt=\"a=2x,a= минус 2x,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/eb/eb43b7b788bae3083e8b5f348ea9617a.svg\" style=\"vertical-align:-3.0pt\"/> исключая точки, которые лежат на прямых <img alt=\"a=x плюс 3,a= минус x минус 3,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d3/d3b59ae7db0fcc22890eb84a30df914f.svg\" style=\"vertical-align:-3.0pt\"/> а именно: точки <img alt=\"( минус 1;2),( минус 1; минус 2),(3;6),(3; минус 6).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/93/930155578e6eae4d3cf73a2cb9bf2741.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\">Таким образом, исходное уравнение имеет ровно два различных корня при </p><center><p><img alt=\"a меньше минус 6; минус 6 меньше a меньше минус 2; минус 2 меньше a меньше 0;0 меньше a меньше 2;2 меньше a меньше 6;иa больше 6. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/52/5297a59a9c0eebdccdad89c444ec609d.svg\" style=\"vertical-align:-2.2pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"a меньше минус 6; минус 6 меньше a меньше минус 2; минус 2 меньше a меньше 0;0 меньше a меньше 2;2 меньше a меньше 6;иa больше 6. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/52/5297a59a9c0eebdccdad89c444ec609d.svg\" style=\"vertical-align:-2.2pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\"( минус принадлежит fty; минус 6)\\cup( минус 6; минус 2)\\cup( минус 2;0)\\cup(0;2)\\cup(2;6)\\cup(6; плюс принадлежит fty).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/58/585cb02f286699399b458b4f8f7b466a.svg\" style=\"vertical-align:-3.6pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получен правильный ответ.",
                score: 4
            },
            {
                text: "С помощью верного рассуждения получены все значения a, но некоторые граничные точки включены/исключены неверно.",
                score: 3
            },
            {
                text: "С помощью верного рассуждения получены не все значения a.",
                score: 2
            },
            {
                text: "Задача верно сведена к исследованию взаимного расположения графика функции и прямой (аналитически или графически).",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 541828,
        num: "19",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В течение <i>n</i> дней каждый день на доску записывают натуральные числа, каждое из которых меньше 6. При этом каждый день (кроме первого) сумма чисел, записанных на доску в этот день, больше, а количество меньше, чем в предыдущий день. </p><p class=\"left_margin\">а) Может ли <i>n</i> быть больше 6?</p><p class=\"left_margin\">б) Может ли среднее арифметическое чисел, записанных в первый день, быть меньше 2, а среднее арифметическое всех чисел, записанных за все дни, быть больше 4?</p><p class=\"left_margin\">в) Известно, что сумма чисел, записанных в первый день, равна 5. Какое наибольшее значение может принимать сумма всех чисел, записанных за все дни?</p>",
        solution_content: "<p class=\"left_margin\">а) Да. Например в первый день выписано 20 единиц, а в каждый следующий день выписывают на две единицы меньше, зато добавляют тройку. Тогда количество чисел каждый день на 1 меньше, а сумма — на 1 больше, чем в предыдущий.</p><p class=\"left_margin\">б) Да. Приведем пример: </p><table style=\"margin:auto\"><tr><th style=\"text-align:center\">Номер дня</th><th style=\"text-align:center\">Кол-во чисел</th><th style=\"text-align:center\">Сумма чисел</th></tr><tr><td style=\"text-align:center\">1</td><td style=\"text-align:center\">200</td><td style=\"text-align:center\">2·199+1</td></tr><tr><td style=\"text-align:center\">2</td><td style=\"text-align:center\">199</td><td style=\"text-align:center\">5·195+3+1+3+1 </td></tr><tr><td style=\"text-align:center\">3</td><td style=\"text-align:center\">198</td><td style=\"text-align:center\">5·195+3+1+5</td></tr><tr><td style=\"text-align:center\">4</td><td style=\"text-align:center\">197</td><td style=\"text-align:center\">5·195+5+5</td></tr></table><p> </p><p class=\"left_margin\">в) Сумма принимает наибольшее при <img alt=\"n\\ge2\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d0/d02ddb89105f15f105fcc60b6d0b1fff.svg\" style=\"vertical-align:-2.3pt\"/>. Если количество не менее двух, то число чисел в первый день меняется от 2 до 5. Сумма в первый день равна 5, тогда  сумма в последний день превысит 5. Тогда количество чисел в последний день — от 2 до 4. Если количество чисел в последний день меняется от 2, то тогда количество чисел в первый день меняется от 3. Имеем по количеству чисел в день:</p><p> </p><table style=\"margin:auto\"><tr><th style=\"text-align:center\">Номер дня </th><th style=\"text-align:center\">1 вариант</th><th style=\"text-align:center\">2 вариант</th><th style=\"text-align:center\">3 вариант</th><th style=\"text-align:center\">4 вариант</th><th style=\"text-align:center\">5 вариант </th><th style=\"text-align:center\">6 вариант</th></tr><tr><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5</td></tr><tr><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4</td></tr><tr><td style=\"text-align:center\">3</td><td style=\"text-align:left\"></td><td style=\"text-align:center\"></td><td style=\"text-align:center\">2</td><td style=\"text-align:left\"></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3</td></tr><tr><td style=\"text-align:center\">4</td><td style=\"text-align:left\"></td><td style=\"text-align:center\"></td><td style=\"text-align:left\"></td><td style=\"text-align:left\"></td><td style=\"text-align:left\"></td><td style=\"text-align:center\">2</td></tr></table><p> </p><p class=\"left_margin\">Вариант 1, 2 и 4 не подходят — они равнозначны. Имеют одну и ту же сумму — 15.</p><p class=\"left_margin\">Сравним 3 вариант и 6. </p><p class=\"left_margin\">Для третьего варианта: максимальная  сумма в первый день это 5. А в третий день это 10. </p><p class=\"left_margin\">Для шестого варианта: </p><p class=\"left_margin\">1 день: 1 1 1 1 </p><p class=\"left_margin\">2 день: 2 2 2 2</p><p class=\"left_margin\">3 день: 3 3 3 </p><p class=\"left_margin\">4 день: 5 5 </p><p class=\"left_margin\">Таким образом, сумма равна 32.</p><p class=\"left_margin\">Для 5 варианта: </p><p class=\"left_margin\">1 день: 1 1 1 1 1</p><p class=\"left_margin\">2 день: 3 4 3 4</p><p class=\"left_margin\">3 день: 5 5 5 </p><p class=\"left_margin\">Таким образом, сумма равна 34. </p><p> </p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> а) да, б) да, в) 34.</p><p> </p><p><b>Примечание.</b></p><p class=\"left_margin\">Рекомендуем сравнить это задание с заданиями 526541 и 526345 из основной волны ЕГЭ 2019 года.</p>",
        criteria: [
            {
                text: "Верно получены все перечисленные (см. критерий на 1 балл) результаты.",
                score: 4
            },
            {
                text: "Верно получены три из перечисленных (см. критерий на 1 балл) результатов.",
                score: 3
            },
            {
                text: "Верно получены два из перечисленных (см. критерий на 1 балл) результатов.",
                score: 2
            },
            {
                text: "Верно получен один из следующих результатов:— обоснованное решение в п. а;— пример в п. б;— искомая оценка в п. в;— пример в п. в, обеспечивающий точность предыдущей оценки.",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 548371,
        num: "1",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">В пачке 250 листов бумаги формата А4. За неделю в офисе расходуется 700 листов. Какого наименьшего количества пачек бумаги хватит на 8 недель?</p>",
        solution_content: "<p class=\"left_margin\">За 8 недель в офисе расходуется 700 · 8 = 5600 листов бумаги. Разделим 5600 на 250: </p><p> </p><center><p><img alt=\" дробь, числитель — 5600, знаменатель — 250 = дробь, числитель — 112, знаменатель — 5 = дробь, числитель — 110 плюс 2, знаменатель — 5 = дробь, числитель — 110, знаменатель — 5 плюс дробь, числитель — 2, знаменатель — 5 =22 дробь, числитель — 2, знаменатель — 5 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3e/3e5808c0eec08cfac6b16e0fa91efde3.svg\" style=\"vertical-align:-8.4pt\"/></p><p> </p></center><p><img alt=\" дробь, числитель — 5600, знаменатель — 250 = дробь, числитель — 112, знаменатель — 5 = дробь, числитель — 110 плюс 2, знаменатель — 5 = дробь, числитель — 110, знаменатель — 5 плюс дробь, числитель — 2, знаменатель — 5 =22 дробь, числитель — 2, знаменатель — 5 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3e/3e5808c0eec08cfac6b16e0fa91efde3.svg\" style=\"vertical-align:-8.4pt\"/></p><p> </p><p class=\"left_margin\">Значит, нужно купить не меньше 23 пачек бумаги.</p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 23.</p><p> </p><p>----------</p><p class=\"left_margin\">Дублирует задание 509213.</p>",
        correct_answer: "23"
    },
    {
        id: 548372,
        num: "2",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">На графике показан процесс разогрева двигателя легкового автомобиля. На оси абсцисс откладывается время в минутах, прошедшее с момента запуска двигателя, на оси ординат — температура двигателя в градусах Цельсия. Определите по графику, сколько минут двигатель нагревался от температуры 40°C до температуры 60°C.</p><p><img src=\"https://ege.sdamgia.ru/get_file?id=23173\" style=\"margin:10px auto;display:block\"/></p>",
        solution_content: "<p class=\"left_margin\">От температуры 40° до температуры 60° двигатель нагревался с третьей по пятую минуты: 2 минуты.</p><p> </p><p>----------</p><p class=\"left_margin\">Дублирует задание 513702.</p>",
        correct_answer: "2"
    },
    {
        id: 548373,
        num: "3",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=65881\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">Найдите площадь треугольника, изображенного на клетчатой бумаге с размером клетки 1 см <img alt=\"\\times\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/60/60c13e05d3ec8c10b8564eae7023d9db.svg\" style=\"vertical-align:-1.8pt\"/>  1 см (см. рис.). Ответ дайте в квадратных сантиметрах.</p>",
        solution_content: "<p class=\"left_margin\">Площадь треугольника равна половине произведения основания на высоту, проведенную к этому основанию или его продолжению. Поэтому</p><p align=\"center\"><img alt=\"S= дробь, числитель — 1, знаменатель — 2 умножить на 5 умножить на 6=15\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/df/dfb3445cdc544bb15c6f223719fa4934.svg\" style=\"vertical-align:-8.4pt\"/> см<sup>2</sup>.</p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span>  15.</p>",
        correct_answer: "15"
    },
    {
        id: 548374,
        num: "4",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">В группе туристов 8 человек. С помощью жребия они выбирают двух человек, которые должны идти в село за продуктами. Какова вероятность того, что турист Б., входящий в состав группы, пойдёт в магазин?</p>",
        solution_content: "<p class=\"left_margin\">Всего туристов 8, случайным образом из них выбирают 2. Вероятность быть выбранным равна 2 : 8 = 0,25.</p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 0,25.</p><p> </p><p>----------</p><p class=\"left_margin\">Дублирует задание 321011.</p>",
        correct_answer: "0,25"
    },
    {
        id: 548375,
        num: "5",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Найдите корень уравнения <img alt=\"3 в степени 2 минус x =81.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/99/99e46e0737c25768f4a4ebb8ca41fe31.svg\" style=\"vertical-align:-1.8pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Перейдем к одному основанию степени:</p><center><p><img alt=\"3 в степени 2 минус x =81 равносильно 3 в степени 2 минус x =3 в степени 4 равносильно 2 минус x=4 равносильно x= минус 2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/38/380c868afd98232407765a4fabed5617.svg\" style=\"vertical-align:-1.8pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"3 в степени 2 минус x =81 равносильно 3 в степени 2 минус x =3 в степени 4 равносильно 2 минус x=4 равносильно x= минус 2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/38/380c868afd98232407765a4fabed5617.svg\" style=\"vertical-align:-1.8pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span>  −2.</p>",
        correct_answer: "-2"
    },
    {
        id: 548376,
        num: "6",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=64854\" style=\"float:right; margin:10px;\"/> Два угла вписанного в окружность четырехугольника равны 82° и 58°. Найдите больший из оставшихся углов. Ответ дайте в градусах.</p>",
        solution_content: "<p class=\"left_margin\">Сумма противоположных углов вписанного четырехугольника равна 180°. Больший из оставшихся углов лежит напротив меньшего из указанных в условии. Поэтому он равен 180° − 58° = 122°.</p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 122.</p>",
        correct_answer: "122"
    },
    {
        id: 548377,
        num: "7",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=66109\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">На рисунке изображен график функции <img alt=\"y=f(x)\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7c/7c1c9491ba7c6e8d6d2cfa82e39b22ca.svg\" style=\"vertical-align:-3.6pt\"/> и отмечены точки −2, −1, 1, 4. В какой из этих точек значение производной наименьшее? В ответе укажите эту точку.</p>",
        solution_content: "<p class=\"left_margin\">Значение производной в точке касания равно угловому коэффициенту касательной, который в свою очередь равен тангенсу угла наклона данной касательной к оси абсцисс. Производная отрицательна в точках −1 и 4. Модуль тангенса угла наклона касательной явно больше в точке 4, поэтому тангенс в этой точке наименьший.</p><p> </p><p><span style=\"letter-spacing:2px \">Ответ:</span>4.</p><p> </p><p>----------</p><p class=\"left_margin\">Дублирует задание 317544.</p>",
        correct_answer: "4"
    },
    {
        id: 548378,
        num: "8",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=30587\" style=\"float:right;margin:10px\"/> Найдите объем многогранника, вершинами которого являются точки  <img alt=\"A\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7f/7fc56270e7a70fa81a5935b72eacbe29.svg\" style=\"vertical-align:-1.8pt\"/>, <img alt=\"B\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9d/9d5ed678fe57bcca610140957afab571.svg\" style=\"vertical-align:-1.8pt\"/>, <img alt=\"C\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/0d/0d61f8370cad1d412f80b84d143e1257.svg\" style=\"vertical-align:-1.8pt\"/>, <img alt=\"B_1\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/26/262e0afc75c8a9fc536a7dce57e6ebe1.svg\" style=\"vertical-align:-2.5pt\"/> прямоугольного параллелепипеда <img alt=\"ABCDA_1B_1C_1D_1\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1f/1f98fd4abe2a7ebc84481105039f3a71.svg\" style=\"vertical-align:-2.5pt\"/>, у которого <img alt=\"AB = 3\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/39/39680c3a9f6e3b1874001eb06c6ea912.svg\" style=\"vertical-align:-1.8pt\"/>, <img alt=\"AD = 3\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e8/e8f46f4365d0097fb04bc220f946b88a.svg\" style=\"vertical-align:-1.8pt\"/>, <img alt=\"AA_1 = 4.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/dd/dd9ffc87fb2e374501d91473cf6dd8cb.svg\" style=\"vertical-align:-2.5pt\"/></p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=30590\" style=\"float:right;margin:10px\"/> Многогранник <i>ABCB</i><sub>1</sub> представляет собой треугольную пирамиду с основанием <i>ABC</i> и высотой<i> h</i> = <i>BB</i><sub>1</sub> = <i>AA</i><sub>1</sub>. Объем такой пирамиды можно вычислить по формуле:<img alt=\"V= дробь, числитель — 1, знаменатель — 3 S_{осн}h,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/65/652164fcc4ceb5e99f899a9addf47fcd.svg\" style=\"vertical-align:-8.5pt\"/> где <img alt=\"S_{осн} = дробь, числитель — 1, знаменатель — 2 AB умножить на BC,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/f0/f0dcf37d8f1fc3c8e6bd84c9d7ab10ff.svg\" style=\"vertical-align:-8.4pt\"/> так как треугольник <i>ABC</i> является прямоугольным. Таким образом,</p><center><p><img alt=\"V= дробь, числитель — 1, знаменатель — 3 умножить на дробь, числитель — 1, знаменатель — 2 AB умножить на BC умножить на AA_1=6.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/41/4156cb1307219f77557f1f2cd2538160.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"V= дробь, числитель — 1, знаменатель — 3 умножить на дробь, числитель — 1, знаменатель — 2 AB умножить на BC умножить на AA_1=6.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/41/4156cb1307219f77557f1f2cd2538160.svg\" style=\"vertical-align:-8.5pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 6.</p>",
        correct_answer: "6"
    },
    {
        id: 548379,
        num: "9",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Найдите значение выражения <img alt=\"36 корень из { 6} тангенс дробь, числитель — Пи , знаменатель — 6 синус дробь, числитель — Пи , знаменатель — 4 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3c/3c00c9c1f7e429fe27d9c3a892873ce4.svg\" style=\"vertical-align:-8.4pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Выполним преобразования: </p><center><p><img alt=\"36 корень из { 6} тангенс дробь, числитель — Пи , знаменатель — 6 синус дробь, числитель — Пи , знаменатель — 4 =36 корень из { 6} умножить на дробь, числитель — корень из { 3}, знаменатель — 3 умножить на дробь, числитель — корень из { 2}, знаменатель — 2 =36.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9b/9b579f5b2f841f3448f99ea563dd2dbf.svg\" style=\"vertical-align:-8.5pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"36 корень из { 6} тангенс дробь, числитель — Пи , знаменатель — 6 синус дробь, числитель — Пи , знаменатель — 4 =36 корень из { 6} умножить на дробь, числитель — корень из { 3}, знаменатель — 3 умножить на дробь, числитель — корень из { 2}, знаменатель — 2 =36.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9b/9b579f5b2f841f3448f99ea563dd2dbf.svg\" style=\"vertical-align:-8.5pt\"/></p><p><span style=\"letter-spacing:2px \">Ответ</span>: 36.</p>",
        correct_answer: "36"
    },
    {
        id: 548380,
        num: "10",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Автомобиль разгоняется на прямолинейном участке шоссе с постоянным ускорением  <i>a</i> км/ч <sup>2</sup>. Скорость   вычисляется по формуле <img alt=\"v = корень из { 2la},\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/69/6951971e6a633b1df78d071c0e0b51b8.svg\" style=\"vertical-align:-3.0pt\"/> где  <i>l</i> — пройденный автомобилем путь. Найдите ускорение, с которым должен двигаться автомобиль, чтобы, проехав 0,5  километра, приобрести скорость 80 км/ч. Ответ выразите в км/ч<sup>2</sup>.</p>",
        solution_content: "<p class=\"left_margin\">Найдем, при каком ускорении автомобиль приобретает скорость 80 км/ч<sup></sup>. Задача сводится к решению уравнения <img alt=\"\\nu = корень из { 2la}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4d/4deca6e28a26b762c5b88e04b8ae0e04.svg\" style=\"vertical-align:-1.8pt\"/> при заданном значении расстояния <img alt=\"{{l}_{0}}=0,5\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d2/d2f0bb8886bb59a53c1ca927985737d0.svg\" style=\"vertical-align:-3.0pt\"/> км:</p><center><img alt=\" корень из { 2 умножить на 0,5a}=80 равносильно a=6400. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/06/0654a8c1d4178565ec0cf2efe5ff6060.svg\" style=\"vertical-align:-3.7pt\"/></center><p><span style=\"letter-spacing:2px \">Ответ</span>: 6400.</p>",
        correct_answer: "6400"
    },
    {
        id: 548381,
        num: "11",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Теплоход проходит по течению реки до пункта назначения 200 км и после стоянки возвращается в пункт отправления. Найдите скорость течения, если скорость теплохода в неподвижной воде равна 15 км/ч, стоянка длится 10 часов, а в пункт отправления теплоход возвращается через 40 часов после отплытия из него. Ответ дайте в км/ч.</p>",
        solution_content: "<p class=\"left_margin\">Пусть <img alt=\"u\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7b/7b774effe4a349c6dd82ad4f4f21d34c.svg\" style=\"vertical-align:-1.8pt\"/> км/ч — скорость течения, тогда скорость теплохода по течению равна <img alt=\"15 плюс u\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/89/89c60c8f994a27fee08364ef2b1773ef.svg\" style=\"vertical-align:-1.8pt\"/> км/ч, а скорость теплохода против течения равна <img alt=\"15 минус u\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/24/24217086d8259de454c1e0fe73e4e376.svg\" style=\"vertical-align:-1.8pt\"/> км/ч.  На весь путь теплоход затратил 40 – 10 = 30 часов, отсюда имеем:</p><p align=\"center\"><img alt=\" дробь, числитель — 200, знаменатель — 15 минус u плюс дробь, числитель — 200, знаменатель — 15 плюс u =30 равносильно дробь, числитель — 200 умножить на 15 умножить на 2, знаменатель — 225 минус {{u в степени 2 }}=30 равносильно дробь, числитель — 200, знаменатель — 225 минус u в степени 2 =1\\underset{0 меньше u меньше 15}{ равносильно }200=225 минус {{u} в степени 2 } равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/71/71ab5a7cef6ddc457eb8881c71eb895e.svg\" style=\"vertical-align:-9.3pt\"/></p><p align=\"center\"><img alt=\" равносильно {{u} в степени 2 }=25 равносильно совокупность выражений  новая строка u=5;  новая строка u= минус 5 конец совокупности .\\underset{u больше 0}{\\mathop{ равносильно }}u=5.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/39/39d237f6e9febb236745cf2235bed73c.svg\" style=\"vertical-align:-14.4pt\"/></p><p> </p><p class=\"left_margin\">Таким образом, скорость течения реки равна 5 км/ч. </p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 5.</p><p> </p><p>----------</p><p class=\"left_margin\">Дублирует задание 26588.</p>",
        correct_answer: "5"
    },
    {
        id: 548382,
        num: "12",
        is_detailed_answer: false,
        task_content: "<p class=\"left_margin\">Найдите точку минимума функции <img alt=\"y=(3 минус x){{e} в степени 3 минус x }.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ad/ad2d8d918cb985b638aa8e63109dca0b.svg\" style=\"vertical-align:-3.6pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Найдем производную заданной функции: </p><p align=\"center\"><img alt=\"{y}'=(3 минус x{)}'e в степени 3 минус x плюс (3 минус x)(e в степени 3 минус x {)}'= минус e в степени 3 минус x плюс (3 минус x)e в степени 3 минус x умножить на ( минус 1)= минус (4 минус x)e в степени 3 минус x =(x минус 4)e в степени 3 минус x .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/bc/bc320affbcc29d0b000aa92fd52605ca.svg\" style=\"vertical-align:-3.6pt\"/></p><p align=\"center\"><img alt=\"(x минус 4){{e} в степени 3 минус x }=0 равносильно x=4.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/de/de223a09841c182184922105564600ca.svg\" style=\"vertical-align:-3.6pt\"/> </p><p><img src=\"https://ege.sdamgia.ru/get_file?id=67536\" style=\"margin:10px auto;display:block;max-width:100%\"/></p><p> Искомая точка минимума <img alt=\"x=4.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d9/d9d1e6c3a49998deef7ad36a6e1bb0d9.svg\" style=\"vertical-align:-1.8pt\"/> </p><p> </p><p><span style=\"letter-spacing:2px \">Ответ</span>: 4.</p>",
        correct_answer: "4"
    },
    {
        id: 548383,
        num: "13",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">а) Решите уравнение <img alt=\" косинус 2x плюс корень из { 2} косинус левая круглая скобка дробь, числитель — Пи , знаменатель — 2 минус x правая круглая скобка минус 1=0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b1/b1bf83f51f4d2b8b1a14015eefb1c974.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\">б) Укажите корни этого уравнения, принадлежащие отрезку <img alt=\" левая квадратная скобка дробь, числитель — 5 Пи , знаменатель — 2 ; 4 Пи правая квадратная скобка .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/67/674c48471a373d59d4a446e17fb2d2ed.svg\" style=\"vertical-align:-11.1pt\"/></p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=65003\" style=\"float:right;margin:10px;max-width:100%;\"/></p><p class=\"left_margin\">а) Преобразуем уравнение:</p><center><p><img alt=\" косинус 2x плюс корень из { 2} косинус левая круглая скобка дробь, числитель — Пи , знаменатель — 2 минус x правая круглая скобка минус 1=0 равносильно 1 минус 2 синус в степени 2 x плюс корень из { 2} синус x минус 1 = 0 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/66/6657518e8813facdcee90dd69a057e90.svg\" style=\"vertical-align:-8.4pt\"/></p><p><img alt=\" равносильно синус x(2 синус x минус корень из { 2})=0 равносильно совокупность выражений синус x = 0, синус x = дробь, числитель — корень из { 2}, знаменатель — 2 конец совокупности . равносильно совокупность выражений x= Пи k,x= дробь, числитель — Пи , знаменатель — 4 плюс 2 Пи k, x= дробь, числитель — 3 Пи , знаменатель — 4 плюс 2 Пи k,k принадлежит Z . конец совокупности . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4f/4f849f185cbe25c7d82865c1cf388b4a.svg\" style=\"vertical-align:-30.9pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" косинус 2x плюс корень из { 2} косинус левая круглая скобка дробь, числитель — Пи , знаменатель — 2 минус x правая круглая скобка минус 1=0 равносильно 1 минус 2 синус в степени 2 x плюс корень из { 2} синус x минус 1 = 0 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/66/6657518e8813facdcee90dd69a057e90.svg\" style=\"vertical-align:-8.4pt\"/></p><p><img alt=\" равносильно синус x(2 синус x минус корень из { 2})=0 равносильно совокупность выражений синус x = 0, синус x = дробь, числитель — корень из { 2}, знаменатель — 2 конец совокупности . равносильно совокупность выражений x= Пи k,x= дробь, числитель — Пи , знаменатель — 4 плюс 2 Пи k, x= дробь, числитель — 3 Пи , знаменатель — 4 плюс 2 Пи k,k принадлежит Z . конец совокупности . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4f/4f849f185cbe25c7d82865c1cf388b4a.svg\" style=\"vertical-align:-30.9pt\"/></p><p class=\"left_margin\">б) Отберем корни при помощи единичной тригонометрической окружности (см. рис.). На заданном отрезке лежат корни <img alt=\"3 Пи , 4 Пи , дробь, числитель — 11 Пи , знаменатель — 4 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/8b/8b2677f6f14ee4cb0b0cb445b49426d8.svg\" style=\"vertical-align:-8.4pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> а)<img alt=\" \\left \\{ Пи k; дробь, числитель — Пи , знаменатель — 4 плюс 2 Пи k; дробь, числитель — 3 Пи , знаменатель — 4 плюс 2 Пи k : k принадлежит Z \\};\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/03/03f308257bf3383fc6e6c2bb1270e8fb.svg\" style=\"vertical-align:-11.1pt\"/> б)<img alt=\"3 Пи , 4 Пи , дробь, числитель — 11 Пи , знаменатель — 4 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/8b/8b2677f6f14ee4cb0b0cb445b49426d8.svg\" style=\"vertical-align:-8.4pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получены верные ответы в обоих пунктах.",
                score: 2
            },
            {
                text: "Обоснованно получен верный ответ в пункте а),ИЛИполучены неверные ответы из-за вычислительной ошибки, но при этом имеется верная последовательность всех шагов решения пункта а) и пункта б).",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 548384,
        num: "14",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В правильной шестиугольной пирамиде <i>SABCDEF</i> боковое ребро <i>SA</i> = 14, а сторона <i>AB</i> = 8. Точка <i>М </i>середина стороны <i>AB</i> Плоскость α проходит через точки <i>M</i> и <i>D</i> и перпендикулярна плоскости <i>ABC</i>. Прямая <i>SC</i> пересекает плоскость α в точке <i>K</i>. </p><p class=\"left_margin\">a) Докажите, что <i>MK</i> = <i>KD</i>.</p><p class=\"left_margin\">б) Найдите объем пирамиды <i>MCDK</i>.</p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=81206\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">а) Пусть <i>O</i> — центр основания пирамиды,  <i>N</i> — середина <i>ED</i>, а <i>H</i> — точка пересечения прямых <i>CO</i> и <i>DM</i>. Плоскость <i>MKD</i> перпендикулярна плоскости основания пирамиды по условию,  плоскость <i>SOC</i> перпендикулярна плоскости основания пирамиды по признаку перпендикулярности плоскостей (<i>SO</i> — высота правильной пирамиды) , <i>KH</i> — линия пересечения плоскостей <i>MKD</i> и <i>SOC</i>, тогда  <i>KH</i> перпендикулярна плоскости основания и, следовательно, <i>MD</i>. Точка <i>O</i> — середина <i>MN</i>, <i>OС</i> параллельна <i>ED</i>, тогда <i>OH</i> — средняя линия треугольника <i>MND</i> (по признаку), значит <i>MH</i> = <i>HD</i>, следовательно, <i>KH</i> является медианой и высотой в треугольнике <i>MKD</i>. Таким образом, треугольник <i>MKD</i> — равнобедренный и <i>MK</i> = <i>KD</i>.</p><p class=\"left_margin\">б) Вычислим:</p><center><p><img alt=\"OH= дробь, числитель — 1, знаменатель — 2 ND = дробь, числитель — 1, знаменатель — 4 ED= дробь, числитель — 1, знаменатель — 4 AB=2. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ba/ba0ff4348355996c8b9bad7d694a4198.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"OH= дробь, числитель — 1, знаменатель — 2 ND = дробь, числитель — 1, знаменатель — 4 ED= дробь, числитель — 1, знаменатель — 4 AB=2. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ba/ba0ff4348355996c8b9bad7d694a4198.svg\" style=\"vertical-align:-8.4pt\"/></p><p> Следовательно,<i> HC</i> = 6. Имеем:</p><center><p><img alt=\" дробь, числитель — CK, знаменатель — CS = дробь, числитель — CH, знаменатель — CO = дробь, числитель — 3, знаменатель — 4 ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/da/dacc51ab63a82f4f3eee989664a9a0d2.svg\" style=\"vertical-align:-8.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" дробь, числитель — CK, знаменатель — CS = дробь, числитель — CH, знаменатель — CO = дробь, числитель — 3, знаменатель — 4 ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/da/dacc51ab63a82f4f3eee989664a9a0d2.svg\" style=\"vertical-align:-8.4pt\"/></p><p>поэтому <img alt=\"CK= дробь, числитель — 3 умножить на 14, знаменатель — 4 = дробь, числитель — 21, знаменатель — 2 ,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a7/a760bf34da251b9bf640f1816b42c568.svg\" style=\"vertical-align:-8.4pt\"/> тогда <img alt=\"KH= корень из { левая круглая скобка дробь, числитель — 21}2 правая круглая скобка в степени 2 минус 6 в степени 2 }= дробь, числитель — 3 корень из { 33, знаменатель — , знаменатель — 2 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/0b/0b826428ff19d9e477db734ca970d2a9.svg\" style=\"vertical-align:-12.3pt\"/> </p><p class=\"left_margin\">Найдем площадь треугольника <i>MCD</i>:</p><center><p><img alt=\"S_{MCD}=2S_{MCH}=2 умножить на дробь, числитель — 1, знаменатель — 2 умножить на MO умножить на CH = MO умножить на CH =4 корень из { 3} умножить на 6= 24 корень из { 3}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2f/2fd252aaf1b49de3718bc31a53e0c0ca.svg\" style=\"vertical-align:-8.3pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"S_{MCD}=2S_{MCH}=2 умножить на дробь, числитель — 1, знаменатель — 2 умножить на MO умножить на CH = MO умножить на CH =4 корень из { 3} умножить на 6= 24 корень из { 3}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2f/2fd252aaf1b49de3718bc31a53e0c0ca.svg\" style=\"vertical-align:-8.3pt\"/></p><p> Тогда объем <i>MCDK</i>:</p><center><p><img alt=\"V= дробь, числитель — 1, знаменатель — 3 умножить на KH умножить на S_{MCD} = дробь, числитель — 1, знаменатель — 3 умножить на дробь, числитель — 3 корень из { 33}, знаменатель — 2 умножить на 24 корень из { 3}=36 корень из { 11}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/79/794c30e0df650bae5358e03104c3057a.svg\" style=\"vertical-align:-8.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"V= дробь, числитель — 1, знаменатель — 3 умножить на KH умножить на S_{MCD} = дробь, числитель — 1, знаменатель — 3 умножить на дробь, числитель — 3 корень из { 33}, знаменатель — 2 умножить на 24 корень из { 3}=36 корень из { 11}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/79/794c30e0df650bae5358e03104c3057a.svg\" style=\"vertical-align:-8.6pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> б) <img alt=\"36 корень из { 11}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7f/7f837e584685d60143dcaa4310ecad17.svg\" style=\"vertical-align:-1.8pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получены верные ответы в пунктах а) и б)",
                score: 2
            },
            {
                text: "Выполнен только один из пунктов а) или б)",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, приведённых выше",
                score: 0
            }
        ]
    },
    {
        id: 548385,
        num: "15",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">Решите неравенство <img alt=\"x в степени 2 логарифм по основанию 243 (4 минус x) меньше или равно логарифм по основанию 3 (x в степени 2 минус 8x плюс 16).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/54/5462bee6b7dca7bda5e896f8764b19c3.svg\" style=\"vertical-align:-3.7pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Преобразуем неравенство:</p><center><p><img alt=\"x в степени 2 логарифм по основанию 243 (4 минус x) меньше или равно логарифм по основанию 3 (x в степени 2 минус 8x плюс 16) равносильно дробь, числитель — x в степени 2 , знаменатель — 5 логарифм по основанию 3 (4 минус x) меньше или равно логарифм по основанию 3 (4 минус x) в степени 2 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3f/3f8f49abc54ed377523159be1f26c056.svg\" style=\"vertical-align:-8.4pt\"/></p><p><img alt=\" равносильно дробь, числитель — x в степени 2 , знаменатель — 5 логарифм по основанию 3 (4 минус x) минус 2 логарифм по основанию 3 (4 минус x) меньше или равно 0 равносильно (x в степени 2 минус 10) логарифм по основанию 3 (4 минус x)\\le0 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7c/7c9893eba22b97cbb0c8fc5c9bf83a04.svg\" style=\"vertical-align:-8.4pt\"/></p><p><img alt=\" равносильно (x минус корень из { 10})(x плюс корень из { 10}) логарифм по основанию 3 (4 минус x) меньше или равно 0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c0/c04c1a1592b0c592e29b8a99b80a2f13.svg\" style=\"vertical-align:-3.8pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"x в степени 2 логарифм по основанию 243 (4 минус x) меньше или равно логарифм по основанию 3 (x в степени 2 минус 8x плюс 16) равносильно дробь, числитель — x в степени 2 , знаменатель — 5 логарифм по основанию 3 (4 минус x) меньше или равно логарифм по основанию 3 (4 минус x) в степени 2 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3f/3f8f49abc54ed377523159be1f26c056.svg\" style=\"vertical-align:-8.4pt\"/></p><p><img alt=\" равносильно дробь, числитель — x в степени 2 , знаменатель — 5 логарифм по основанию 3 (4 минус x) минус 2 логарифм по основанию 3 (4 минус x) меньше или равно 0 равносильно (x в степени 2 минус 10) логарифм по основанию 3 (4 минус x)\\le0 равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7c/7c9893eba22b97cbb0c8fc5c9bf83a04.svg\" style=\"vertical-align:-8.4pt\"/></p><p><img alt=\" равносильно (x минус корень из { 10})(x плюс корень из { 10}) логарифм по основанию 3 (4 минус x) меньше или равно 0.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/c0/c04c1a1592b0c592e29b8a99b80a2f13.svg\" style=\"vertical-align:-3.8pt\"/></p><p><img src=\"https://ege.sdamgia.ru/get_file?id=64826\" style=\"float:right;margin:10px;max-width:100%;width:25%\"/></p><p class=\"left_margin\">Заметим, что логарифм обращается в нуль в точке 3, применим на ОДЗ — луче <img alt=\"x меньше 4\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/66/66b7a8037824758eeab998a1234349c5.svg\" style=\"vertical-align:-1.8pt\"/> метод интервалов (см. рис.) и выпишем ответ: <img alt=\" минус корень из { 10} меньше или равно x меньше или равно 3,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2b/2b18859d7d908321c472bb61582ab729.svg\" style=\"vertical-align:-3.1pt\"/> <img alt=\" корень из { 10} меньше или равно x меньше 4.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/bd/bd202f5f6b45dcac37ba320d3d2196c6.svg\" style=\"vertical-align:-2.4pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\"[ минус корень из { 10};3]\\cup[ корень из { 10};4).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a6/a6641e94337c411117baab97608a8776.svg\" style=\"vertical-align:-3.7pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получен верный ответ.",
                score: 2
            },
            {
                text: "Решение содержит вычислительную ошибку, возможно, приведшую к неверному ответу, но при этом имеется верная последовательность всех шагов решения",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 548386,
        num: "16",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">Две окружности касаются внутренним образом в точке <i>С</i>. Вершины <i>A</i> и <i>B</i> равнобедренного прямоугольного треугольника <i>ABC</i> c прямым углом <i>C</i> лежат на большей и меньшей окружностях соответственно. Прямая <i>AC</i> вторично пересекает меньшую окружность в точке <i>D</i>. Прямая <i>BC</i> вторично пересекает большую окружность в точке <i>E</i>. </p><p class=\"left_margin\">а) Докажите, что <i>AE</i> параллельно <i>BD</i>.</p><p class=\"left_margin\">б) Найдите <i>AC</i>, если радиусы окружностей равны 8 и 15.</p>",
        solution_content: "<p class=\"left_margin\"><img src=\"https://ege.sdamgia.ru/get_file?id=64823\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">а) Проведем общую касательную к окружностям в точке касания <i>C</i>. Угол между это касательной и <i>AC </i>обозначим за α. Тогда по теореме об угле между касательной и хордой </p><center><p><img alt=\"\\angle DBC = \\angle \\alpha = \\angle AEC.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b6/b6ff8f56beb552bad453ae20588f72eb.svg\" style=\"vertical-align:-1.8pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"\\angle DBC = \\angle \\alpha = \\angle AEC.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b6/b6ff8f56beb552bad453ae20588f72eb.svg\" style=\"vertical-align:-1.8pt\"/></p><p> Таким образом, прямые <i>DB</i> и <i>AE</i> параллельны.</p><p class=\"left_margin\">б) Заметим, что <i>BD</i> и <i>AE</i> — диаметры окружностей. Тогда <i>BD</i> = 16, <i>AE</i> = 30, треугольники <i>DBC</i> и <i>AEC</i> подобны с коэффициентом подобия <img alt=\"k= дробь, числитель — 16, знаменатель — 30 = дробь, числитель — 8, знаменатель — 15 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/80/80fd4aafc2b77a8410a1b8b835a0f6a2.svg\" style=\"vertical-align:-8.4pt\"/> Пусть <i>AC</i> = <i>BC</i> = <i>x</i>, заметим, что <i>CE</i> : <i>CB</i> = 15 : 8, следовательно, <img alt=\" CE= дробь, числитель — 15, знаменатель — 8 x\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b2/b264417cbc8136a20e445b9f3367df00.svg\" style=\"vertical-align:-8.4pt\"/>. По теореме Пифагора для треугольника <i>ACE</i></p><center><p><img alt=\"x в степени 2 плюс левая круглая скобка дробь, числитель — 15, знаменатель — 8 x правая круглая скобка в степени 2 =30 в степени 2 равносильно x= дробь, числитель — 240, знаменатель — 17 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4f/4f040663531d81b338f409205b97e329.svg\" style=\"vertical-align:-11.2pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"x в степени 2 плюс левая круглая скобка дробь, числитель — 15, знаменатель — 8 x правая круглая скобка в степени 2 =30 в степени 2 равносильно x= дробь, числитель — 240, знаменатель — 17 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/4f/4f040663531d81b338f409205b97e329.svg\" style=\"vertical-align:-11.2pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> б) <img alt=\" дробь, числитель — 240, знаменатель — 17 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/d5/d5861ca2dd457812b38c964b2ff937a9.svg\" style=\"vertical-align:-8.5pt\"/></p>",
        criteria: [
            {
                text: "Имеется верное доказательство утверждения пункта a) и обоснованно получен верный ответ в пункте б)",
                score: 3
            },
            {
                text: "Получен обоснованный ответ в пункте б)ИЛИимеется  верное  доказательство  утверждения  пункта  а)  и  при обоснованном  решении  пункта  б)  получен  неверный  ответ  из-за арифметической ошибки",
                score: 2
            },
            {
                text: "Имеется верное доказательство утверждения пункта а)ИЛИпри обоснованном решении пункта б) получен неверный ответ из-за арифметической ошибки, ИЛИобоснованно  получен  верный  ответ  в  пункте  б)  с  использованием утверждения пункта а), при этом пункт а) не выполнен",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, приведённых выше",
                score: 0
            }
        ]
    },
    {
        id: 548387,
        num: "17",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">В июле 2020 года планируется взять кредит на некоторую сумму. Условия возврата таковы:</p><p class=\"left_margin\">— в январе каждого года долг увеличивается на 30% по сравнению с предыдущим годом;</p><p class=\"left_margin\">— с февраля по июнь нужно выплатить часть долга одним платежом.</p><p class=\"left_margin\">Определите, на какую сумму будет взят кредит банке, если известно, что кредит будет выплачен тремя равными платежами (за 3 года) и общая сумма выплат будет на 78 030 рублей больше суммы взятого кредита.</p>",
        solution_content: "<p class=\"left_margin\">Пусть в кредит планируется взять <i>S</i> рублей, а ежегодный платеж по кредиту будет составлять <i>x</i> рублей. Тогда каждый год долг увеличивается на 30% или в <img alt=\"1 плюс дробь, числитель — 30, знаменатель — 100 = 1,3\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/bc/bce51018e9146ea20f15c12012b03dc5.svg\" style=\"vertical-align:-8.5pt\"/> раза и уменьшается на <i>x</i> рублей.</p><p class=\"left_margin\">Тогда в первый год долг составит:<img alt=\"S умножить на 1,3\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/64/640e77cf81af14cf069c0fee0df45e09.svg\" style=\"vertical-align:-3.0pt\"/>, остаток будет равен:<img alt=\"S умножить на 1,3 минус x.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/af/af3a52a459999fb90caf57412e7f332b.svg\" style=\"vertical-align:-3.0pt\"/></p><p class=\"left_margin\">После второго года остаток по кредиту составит:<img alt=\"(S умножить на 1,3 минус x)1,3 минус x.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/05/054de19f163f307d20ecbea28e42b653.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\">В конце третьего года он будет равен:<img alt=\"((S умножить на 1,3 минус x)1,3 минус x)1,3 минус x.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/05/056b6d0af548aa9313fa3ba9131f5e28.svg\" style=\"vertical-align:-3.6pt\"/></p><p class=\"left_margin\">По условию кредит был погашен за 3 года, а это значит, что остаток за третий год равен 0, то есть:</p><center><p><img alt=\"((S умножить на 1,3 минус x)1,3 минус x)1,3 минус x = 0 равносильно 1,3 в степени 3 S минус 3,99x = 0 равносильно x = дробь, числитель — 2,197S, знаменатель — 3,99 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/03/035dd18027b06f2a2dbe3d9670a4c216.svg\" style=\"vertical-align:-10.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"((S умножить на 1,3 минус x)1,3 минус x)1,3 минус x = 0 равносильно 1,3 в степени 3 S минус 3,99x = 0 равносильно x = дробь, числитель — 2,197S, знаменатель — 3,99 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/03/035dd18027b06f2a2dbe3d9670a4c216.svg\" style=\"vertical-align:-10.6pt\"/></p><p class=\"left_margin\">По условию общая сумма выплат на 78 030 рублей больше суммы взятого кредита, а значит:</p><center><p><img alt=\"3x=S плюс 78030 равносильно дробь, числитель — 2,197S, знаменатель — 1,33 =S плюс 78030 равносильно S= дробь, числитель — 1,33 умножить на 78030, знаменатель — 0,867 =119700 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/43/437684ca5cba2fbba5b5f35428abc460.svg\" style=\"vertical-align:-10.6pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\"3x=S плюс 78030 равносильно дробь, числитель — 2,197S, знаменатель — 1,33 =S плюс 78030 равносильно S= дробь, числитель — 1,33 умножить на 78030, знаменатель — 0,867 =119700 .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/43/437684ca5cba2fbba5b5f35428abc460.svg\" style=\"vertical-align:-10.6pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> 119 700 рублей.</p><p> </p><p>----------</p><p class=\"left_margin\">Дублирует задание 517573 из основной волны ЕГЭ 2017 года.</p>",
        criteria: [
            {
                text: "Обоснованно получен верный ответ",
                score: 3
            },
            {
                text: "Верно построена математическая модель, решение сведено к исследованию этой модели и получен результат:— неверный ответ из-за вычислительной ошибки;— верный ответ, но решение недостаточно обосновано",
                score: 2
            },
            {
                text: "Верно построена математическая модель, решение сведено к исследованию этой модели, при этом решение может быть не завершено",
                score: 1
            },
            {
                text: " Решение не соответствует ни одному из критериев, перечисленных выше",
                score: 0
            }
        ]
    },
    {
        id: 548388,
        num: "18",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">Найдите все значения <i>a</i>, при каждом из которых система уравнений</p><center><p><img alt=\" система выражений логарифм по основанию 3 (a минус x в степени 2 )= логарифм по основанию 3 (a минус y в степени 2 ),x в степени 2 плюс y в степени 2 =4x плюс 6y конец системы . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2d/2de9f14894984eb6facce4730f902d71.svg\" style=\"vertical-align:-14.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" система выражений логарифм по основанию 3 (a минус x в степени 2 )= логарифм по основанию 3 (a минус y в степени 2 ),x в степени 2 плюс y в степени 2 =4x плюс 6y конец системы . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2d/2de9f14894984eb6facce4730f902d71.svg\" style=\"vertical-align:-14.4pt\"/></p><p>имеет ровно два различных решения.</p>",
        solution_content: "<p class=\"left_margin\">Преобразуем систему:</p><center><p><img alt=\" система выражений логарифм по основанию 3 (a минус x в степени 2 )= логарифм по основанию 3 (a минус y в степени 2 ),x в степени 2 плюс y в степени 2 =4x плюс 6y конец системы . равносильно система выражений a минус x в степени 2 =a минус y в степени 2 ,a минус x в степени 2 больше 0,x в степени 2 минус 4x плюс y в степени 2 минус 6y=0 конец системы . равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/aa/aa71fc1341e936e76674ceff27426f7b.svg\" style=\"vertical-align:-21.1pt\"/></p><p><img alt=\" равносильно система выражений x в степени 2 =y в степени 2 ,a минус x в степени 2 больше 0,x в степени 2 минус 4x плюс 4 плюс y в степени 2 минус 6y плюс 9=13 конец системы . равносильно система выражений y=\\pm x, минус корень из { a} меньше x меньше корень из { a},(x минус 2) в степени 2 плюс (y минус 3) в степени 2 =13. конец системы . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/5d/5d90b542f29d9448d2da4234eb211eae.svg\" style=\"vertical-align:-21.0pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" система выражений логарифм по основанию 3 (a минус x в степени 2 )= логарифм по основанию 3 (a минус y в степени 2 ),x в степени 2 плюс y в степени 2 =4x плюс 6y конец системы . равносильно система выражений a минус x в степени 2 =a минус y в степени 2 ,a минус x в степени 2 больше 0,x в степени 2 минус 4x плюс y в степени 2 минус 6y=0 конец системы . равносильно \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/aa/aa71fc1341e936e76674ceff27426f7b.svg\" style=\"vertical-align:-21.1pt\"/></p><p><img alt=\" равносильно система выражений x в степени 2 =y в степени 2 ,a минус x в степени 2 больше 0,x в степени 2 минус 4x плюс 4 плюс y в степени 2 минус 6y плюс 9=13 конец системы . равносильно система выражений y=\\pm x, минус корень из { a} меньше x меньше корень из { a},(x минус 2) в степени 2 плюс (y минус 3) в степени 2 =13. конец системы . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/5d/5d90b542f29d9448d2da4234eb211eae.svg\" style=\"vertical-align:-21.0pt\"/></p><p><img src=\"https://ege.sdamgia.ru/get_file?id=64875\" style=\"float:right;margin:10px;max-width:100%\"/></p><p class=\"left_margin\">Изобразим линии, соответствующие уравнениям и неравенствам системы, в плоскости <i>xOy.</i> Уравнения <img alt=\"y=\\pm x\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/76/767cbfc602c6133d2524b15e25fe8414.svg\" style=\"vertical-align:-3.0pt\"/>  задают две прямые, проходящие через начало координат. Двойное неравенство <img alt=\" минус корень из { a} меньше x меньше корень из { a}\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/74/74eca90595a37e3060a718a6fbad4aca.svg\" style=\"vertical-align:-3.0pt\"/> задают внутреннюю часть вертикальной полосы, ограниченной прямыми <img alt=\"x= минус корень из { a}\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e8/e80b8a9f25caab8c25272df52bfcfd02.svg\" style=\"vertical-align:-3.0pt\"/> и <img alt=\"x= корень из { a}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/cc/ccb276a93ef7423d5e10a5022a4c7806.svg\" style=\"vertical-align:-3.0pt\"/> Уравнение <img alt=\"(x минус 2) в степени 2 плюс (y минус 3) в степени 2 =13\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/ec/ec53d2ba03a6abe26f6b09f5624a5bed.svg\" style=\"vertical-align:-3.6pt\"/> задает окружность с центром в точке <img alt=\"(2; 3)\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/74/74694ea30ec88874f7abfe620c466415.svg\" style=\"vertical-align:-3.6pt\"/> и радиусом <img alt=\" корень из { 13}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/7e/7eeec22cc1323fc89844470114833b3a.svg\" style=\"vertical-align:-1.8pt\"/></p><p class=\"left_margin\">Найдем абсциссы точек пересечения прямой <img alt=\"y=x\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/5d/5dbad057040ec6eb5aa5841786e25d33.svg\" style=\"vertical-align:-3.0pt\"/> и окружности: подставим <img alt=\"y=x\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/5d/5dbad057040ec6eb5aa5841786e25d33.svg\" style=\"vertical-align:-3.0pt\"/> во второе уравнение исходной системы. Получим: <img alt=\"2x в степени 2 =10x,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1f/1f78bdb6dff54ac961375494b95b124c.svg\" style=\"vertical-align:-3.0pt\"/> то есть <img alt=\"x=0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e1/e11729b0b65ecade3fc272548a3883fc.svg\" style=\"vertical-align:-1.8pt\"/> или <img alt=\"x=5.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/f3/f37e32882c606521f8d0dd99fbce38be.svg\" style=\"vertical-align:-1.8pt\"/> Аналогично найдем абсциссы точек пересечения окружности и прямой <img alt=\"y= минус x.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3d/3d1430a1d907f12b7657b8d71a7d64f4.svg\" style=\"vertical-align:-3.0pt\"/> Имеем:<img alt=\"2x в степени 2 = минус 2x,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/54/5440405ccbab8d0cf386ae1c4a7c9691.svg\" style=\"vertical-align:-3.0pt\"/> откуда <img alt=\"x=0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e1/e11729b0b65ecade3fc272548a3883fc.svg\" style=\"vertical-align:-1.8pt\"/> или <img alt=\"x= минус 1.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/37/37d7fd1c0234c63a605600983c5bdb8f.svg\" style=\"vertical-align:-1.8pt\"/></p><p class=\"left_margin\">Тем самым получены абсциссы трех точек <img alt=\"x= минус 1, x=0, x=5,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/25/25c5eed8f54ac83883d3728a00a90020.svg\" style=\"vertical-align:-3.0pt\"/> которые могут быть решениями системы при условии существования логарифмов. Требуется, чтобы (строго) внутрь полосы <img alt=\" минус корень из { a} меньше x меньше корень из { a},\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/f9/f9c7d050b0e066c77f1b9c3aec573058.svg\" style=\"vertical-align:-3.0pt\"/> симметричной относительно оси ординат, попали ровно две из трех этих точек. Это происходит в точности тогда, когда <img alt=\"1 меньше корень из { a}\\leq 5\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/09/09c646f7784c8e7d19c8c66e4db2942c.svg\" style=\"vertical-align:-3.0pt\"/>. Таким образом, <img alt=\"1 меньше a меньше или равно 25.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/83/839ae0c710c0ee41bf7b1654ca11ff67.svg\" style=\"vertical-align:-2.3pt\"/></p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\"1 меньше a меньше или равно 25.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/a5/a5d86b9ed5a710cba03468f5ba5e867f.svg\" style=\"vertical-align:-2.3pt\"/></p><p> </p><p><b>Приведем другое решение.</b></p><p class=\"left_margin\">Преобразуем первое уравнение системы:</p><center><p><img alt=\" логарифм по основанию 3 (a минус x в степени 2 )= логарифм по основанию 3 (a минус y в степени 2 ) равносильно система выражений a больше x в степени 2 , совокупность выражений y=x,y= минус x. конец системы . конец совокупности . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1f/1fb46833892e078db1b600a300d9ec1b.svg\" style=\"vertical-align:-23.3pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" логарифм по основанию 3 (a минус x в степени 2 )= логарифм по основанию 3 (a минус y в степени 2 ) равносильно система выражений a больше x в степени 2 , совокупность выражений y=x,y= минус x. конец системы . конец совокупности . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/1f/1fb46833892e078db1b600a300d9ec1b.svg\" style=\"vertical-align:-23.3pt\"/></p><p class=\"left_margin\">Второе уравнение системы с учетом условия <img alt=\"y в степени 2 =x в степени 2 \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/3a/3a425bf826dbcd84092fb7d00d682c92.svg\" style=\"vertical-align:-3.0pt\"/> принимает вид: <img alt=\"x в степени 2 минус 2x минус 3y=0 (*).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e6/e63bcc8f2de6c3b237671096acc2980a.svg\" style=\"vertical-align:-3.6pt\"/> Подставляя в полученное уравнение <i>y</i> = <i>x</i>, получаем <img alt=\"x в степени 2 минус 5x=0,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/6f/6f8e21b16ca0bf1c06a89b5a5422a1c4.svg\" style=\"vertical-align:-3.0pt\"/> откуда <img alt=\"x_1=0, y_1=0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/b8/b8d5c267ea9ec8b3eb7d7e04f302cf5d.svg\" style=\"vertical-align:-3.0pt\"/> или <img alt=\"x_2=5,y_2=5. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/8d/8d1b414b17078c7df61b586b9fd8c398.svg\" style=\"vertical-align:-3.0pt\"/> Подставляя в уравнение (⁎) <i>y</i> = −<i>x</i>, получаем <img alt=\"x в степени 2 плюс x=0,\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/88/8878095830760ab45a6a987d018c831a.svg\" style=\"vertical-align:-3.0pt\"/> откуда <img alt=\"x_3=0,y_3=0\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/82/82ff6c0e924cbf913693fb9bd854ceb0.svg\" style=\"vertical-align:-3.0pt\"/> или <img alt=\"x_4= минус 1, y_4=1. \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/43/4392d8485cb86946f9adf839fb990581.svg\" style=\"vertical-align:-3.0pt\"/></p><p class=\"left_margin\">Два различных решения система будет иметь в следующих трех случаях:</p><center><p><img alt=\" система выражений a больше 0,a больше 25,a меньше или равно 1, конец системы . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/76/766a54aa8e228c298ed8505fe9210c71.svg\" style=\"vertical-align:-21.0pt\"/>       или       <img alt=\" система выражений a больше 0,a больше 1,a меньше или равно 25, конец системы .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e9/e98c8dacd3532b1f09bf3ee24e93fbfd.svg\" style=\"vertical-align:-21.0pt\"/>       или        <img alt=\" система выражений a\\le0,a больше 25,a больше 1. конец системы . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/be/bea1b093328636579824a95e00f6a411.svg\" style=\"vertical-align:-21.0pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" система выражений a больше 0,a больше 25,a меньше или равно 1, конец системы . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/76/766a54aa8e228c298ed8505fe9210c71.svg\" style=\"vertical-align:-21.0pt\"/>       или       <img alt=\" система выражений a больше 0,a больше 1,a меньше или равно 25, конец системы .\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/e9/e98c8dacd3532b1f09bf3ee24e93fbfd.svg\" style=\"vertical-align:-21.0pt\"/>       или        <img alt=\" система выражений a\\le0,a больше 25,a больше 1. конец системы . \" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/be/bea1b093328636579824a95e00f6a411.svg\" style=\"vertical-align:-21.0pt\"/></p><p> Первая и последняя из полученных систем несовместны, решением второй являются <img alt=\"1 меньше a меньше или равно 25.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/83/839ae0c710c0ee41bf7b1654ca11ff67.svg\" style=\"vertical-align:-2.3pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получен правильный ответ",
                score: 4
            },
            {
                text: "С помощью верного рассуждения получено множество значений а, отличающееся от искомого конечным числом точек",
                score: 3
            },
            {
                text: "С помощью верного рассуждения получены все граничные точки искомого множества значений а",
                score: 2
            },
            {
                text: "Верно получена хотя бы одна граничная точка искомого множества значений а",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше",
                score: 0
            }
        ]
    },
    {
        id: 548389,
        num: "19",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">На доске написано <i>n</i> единиц, между некоторыми из которых поставили знаки + и посчитали сумму. Например, если изначально было написано  <i>n</i> = 12 единиц, то могла получиться, например, такая сумма:</p><center><p class=\"left_margin\">1 + 11 + 11 + 111 + 11 + 1 + 1 = 147.</p><p class=\"left_margin\"></p></center><p class=\"left_margin\">1 + 11 + 11 + 111 + 11 + 1 + 1 = 147.</p><p class=\"left_margin\">а) Могла ли сумма равняться 150, если  <i>n</i> = 60?</p><p class=\"left_margin\">б) Могла ли сумма равняться 150, если  <i>n</i> = 80?</p><p class=\"left_margin\">в) Чему могло равняться <i>n</i>, если полученная сумма чисел равна 150?</p>",
        solution_content: "<p class=\"left_margin\">а) Да, например, 10 раз по 11 и 40 раз по 1.</p><p class=\"left_margin\">б) Нет. Заметим, что число дает тот же остаток от деления на 3, что и его сумма цифр. Поэтому сумма всех этих чисел будет давать остаток от деления на 3 такой же, как и просто сумма восьмидесяти единиц, то есть 2, а 150 кратно трем. Противоречие.</p><p class=\"left_margin\">в) Ясно, что использовать слагаемые большие чем 111 нельзя, а само число 111 можно, но только один раз. Если оно использовано, то нужно набрать ещё 39, это делается использованием числа 11 от 0 до 3 раз и, соответственно, требует 42, 33, 24, 15 единиц.</p><p class=\"left_margin\">Если число не использовано, то можно использовать 11 от 0 до 13 раз. Каждое новое использование 11 вместо двух единиц увеличивает сумму на 9, поэтому должно сопровождаться выкидыванием девяти единиц. Следовательно, можно взять также 150, 141, ..., 33 единицы. Общий ответ: числа 150, 141, ..., 15 (прогрессия с разностью 9).</p><p> </p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> а) да, б) нет, в) 150, 141, 132, 123, 114, 105, 96, 87, 78, 69, 60, 51, 42, 33, 24, 15.</p>",
        criteria: [
            {
                text: "Верно получены все перечисленные (см. критерий на 1 балл) результаты",
                score: 4
            },
            {
                text: "Верно получены три из перечисленных (см. критерий на 1 балл) результатов",
                score: 3
            },
            {
                text: "Верно получены два из перечисленных (см. критерий на 1 балл) результатов",
                score: 2
            },
            {
                text: "Верно получен один из следующих результатов:—\tобоснованное решение пункта а;—\tобоснованное решение пункта б;—\tискомая оценка в пункте в;—\tпример в пункте в, обеспечивающий точность предыдущей оценки",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },
    {
        id: 561177,
        num: "15",
        is_detailed_answer: true,
        task_content: "<p class=\"left_margin\">Решите неравенство <img alt=\" логарифм по основанию 3 (x плюс 7) плюс дробь, числитель — 1, знаменатель — 6 логарифм по основанию 3 (x плюс 1) в степени 6 \\ge2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/2c/2c8ac4ac96d2a8055116889e3c14d436.svg\" style=\"vertical-align:-8.5pt\"/></p>",
        solution_content: "<p class=\"left_margin\">Запишем исходное неравенство в виде:</p><center><p><img alt=\" логарифм по основанию 3 (x плюс 7) плюс логарифм по основанию 3 |x плюс 1|\\ge2 равносильно логарифм по основанию 3 (|x плюс 1| умножить на (x плюс 7))\\ge2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/af/aff5644c01d6ad52cdc0ed9ab7cd9bfa.svg\" style=\"vertical-align:-3.7pt\"/> </p><p class=\"left_margin\"></p></center><p><img alt=\" логарифм по основанию 3 (x плюс 7) плюс логарифм по основанию 3 |x плюс 1|\\ge2 равносильно логарифм по основанию 3 (|x плюс 1| умножить на (x плюс 7))\\ge2.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/af/aff5644c01d6ad52cdc0ed9ab7cd9bfa.svg\" style=\"vertical-align:-3.7pt\"/> </p><p class=\"left_margin\">Рассмотрим первый случай:</p><center><p><img alt=\" система выражений минус 7 меньше x меньше минус 1, минус (x плюс 1)(x плюс 7)\\ge9 конец системы . равносильно система выражений минус 7 меньше x меньше минус 1,(x плюс 4) в степени 2 \\le0 конец системы . равносильно x= минус 4.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/8c/8c1a9a10a5df93c390fea1cf3e0db354.svg\" style=\"vertical-align:-14.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" система выражений минус 7 меньше x меньше минус 1, минус (x плюс 1)(x плюс 7)\\ge9 конец системы . равносильно система выражений минус 7 меньше x меньше минус 1,(x плюс 4) в степени 2 \\le0 конец системы . равносильно x= минус 4.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/8c/8c1a9a10a5df93c390fea1cf3e0db354.svg\" style=\"vertical-align:-14.4pt\"/></p><p class=\"left_margin\">Рассмотрим второй случай:</p><center><p><img alt=\" система выражений x больше минус 1,(x плюс 1)(x плюс 7)\\ge9 конец системы . система выражений x больше минус 1,x в степени 2 плюс 8x минус 2\\ge0 конец системы . равносильно x\\ge минус 4 плюс корень из { 18}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9d/9d6a943affdfeb1eef1dc65dbb5ef734.svg\" style=\"vertical-align:-14.4pt\"/></p><p class=\"left_margin\"></p></center><p><img alt=\" система выражений x больше минус 1,(x плюс 1)(x плюс 7)\\ge9 конец системы . система выражений x больше минус 1,x в степени 2 плюс 8x минус 2\\ge0 конец системы . равносильно x\\ge минус 4 плюс корень из { 18}.\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/9d/9d6a943affdfeb1eef1dc65dbb5ef734.svg\" style=\"vertical-align:-14.4pt\"/></p><p><span style=\"letter-spacing: 2px;\">Ответ:</span> <img alt=\"\\{ минус 4\\}\\cup[ минус 4 плюс 3 корень из { 2}; плюс принадлежит fty).\" class=\"tex\" src=\"https://ege.sdamgia.ru/formula/svg/60/60333d79c584808b72ec52c004222b0b.svg\" style=\"vertical-align:-3.6pt\"/></p>",
        criteria: [
            {
                text: "Обоснованно получен верный ответ.",
                score: 2
            },
            {
                text: "Решение содержит вычислительную ошибку, возможно, приведшую к неверному ответу, но при этом имеется верная последовательность всех шагов решения",
                score: 1
            },
            {
                text: "Решение не соответствует ни одному из критериев, перечисленных выше.",
                score: 0
            }
        ]
    },

]

export const tickets_list: TicketType[] = [
    {
        id: 37671734,
        is_full_exam_version: false,
        description_content: `<p align="justify">При выполнении заданий с кратким ответом впишите в поле для ответа цифру, которая соответствует номеру правильного ответа, или число, слово, последовательность букв (слов) или цифр. Ответ следует записывать без пробелов и каких-либо дополнительных символов. Дробную часть отделяйте от целой десятичной запятой. Единицы измерений писать не нужно.</p><p align="justify">Если вариант задан учителем, вы можете вписать или загрузить в систему ответы к заданиям с развернутым ответом. Учитель увидит результаты выполнения заданий с кратким ответом и сможет оценить загруженные ответы к заданиям с развернутым ответом. Выставленные учителем баллы отобразятся в вашей статистике.</p>`,
        problems: problems_list.filter((problem) => [81287, 513435, 250977, 325909, 13685, 27750, 124215, 502016, 86983, 518955, 5773, 3865, 511453, 511239, 552117].includes(problem.id))
    },
    {
        id: 37845506,
        is_full_exam_version: true,
        description_content: `<p align="justify">При выполнении заданий с кратким ответом впишите в поле для ответа цифру, которая соответствует номеру правильного ответа, или число, слово, последовательность букв (слов) или цифр. Ответ следует записывать без пробелов и каких-либо дополнительных символов. Дробную часть отделяйте от целой десятичной запятой. Единицы измерений писать не нужно.</p><p align="justify">Если вариант задан учителем, вы можете вписать или загрузить в систему ответы к заданиям с развернутым ответом. Учитель увидит результаты выполнения заданий с кратким ответом и сможет оценить загруженные ответы к заданиям с развернутым ответом. Выставленные учителем баллы отобразятся в вашей статистике.</p>`,
        problems: problems_list.filter((problem) => [561163, 561164, 561165, 561166, 561167, 561168, 561169, 561170, 561171, 561172, 561173, 561174, 561175, 561176, 561177, 561178, 561179, 561180, 561181].includes(problem.id))
    },
    {
        id: 37864708,
        is_full_exam_version: true,
        description_content: "<p align=\"justify\">При выполнении заданий с кратким ответом впишите в поле для ответа цифру, которая соответствует номеру правильного ответа, или число, слово, последовательность букв (слов) или цифр. Ответ следует записывать без пробелов и каких-либо дополнительных символов. Дробную часть отделяйте от целой десятичной запятой. Единицы измерений писать не нужно.</p><p align=\"justify\">Если вариант задан учителем, вы можете вписать или загрузить в систему ответы к заданиям с развернутым ответом. Учитель увидит результаты выполнения заданий с кратким ответом и сможет оценить загруженные ответы к заданиям с развернутым ответом. Выставленные учителем баллы отобразятся в вашей статистике.</p>",
        problems: problems_list.filter((problem) => [
            561215,
            561216,
            561217,
            561218,
            561219,
            561220,
            561221,
            561222,
            561223,
            561224,
            561225,
            561226,
            561227,
            561228,
            561229,
            561230,
            561231,
            561232,
            561233
        ].includes(problem.id))
    },
    {
        id: 28882172,
        is_full_exam_version: true,
        description_content: "<p align=\"justify\">При выполнении заданий с кратким ответом впишите в поле для ответа цифру, которая соответствует номеру правильного ответа, или число, слово, последовательность букв (слов) или цифр. Ответ следует записывать без пробелов и каких-либо дополнительных символов. Дробную часть отделяйте от целой десятичной запятой. Единицы измерений писать не нужно.</p><p align=\"justify\">Если вариант задан учителем, вы можете вписать или загрузить в систему ответы к заданиям с развернутым ответом. Учитель увидит результаты выполнения заданий с кратким ответом и сможет оценить загруженные ответы к заданиям с развернутым ответом. Выставленные учителем баллы отобразятся в вашей статистике.</p>",
        problems: problems_list.filter((problem) => [
            541366,
            541367,
            541368,
            541369,
            541370,
            541371,
            541372,
            541373,
            541374,
            541375,
            541376,
            541377,
            541378,
            541379,
            541380,
            541381,
            541382,
            541383,
            541384
        ].includes(problem.id))
    },
    {
        id: 28974423,
        is_full_exam_version: true,
        description_content: "<p align=\"justify\">При выполнении заданий с кратким ответом впишите в поле для ответа цифру, которая соответствует номеру правильного ответа, или число, слово, последовательность букв (слов) или цифр. Ответ следует записывать без пробелов и каких-либо дополнительных символов. Дробную часть отделяйте от целой десятичной запятой. Единицы измерений писать не нужно.</p><p align=\"justify\">Если вариант задан учителем, вы можете вписать или загрузить в систему ответы к заданиям с развернутым ответом. Учитель увидит результаты выполнения заданий с кратким ответом и сможет оценить загруженные ответы к заданиям с развернутым ответом. Выставленные учителем баллы отобразятся в вашей статистике.</p>",
        problems: problems_list.filter((problem) => [
            541810,
            541811,
            541812,
            541813,
            541814,
            541815,
            541816,
            541817,
            541818,
            541819,
            541820,
            541821,
            541822,
            541823,
            541824,
            541825,
            541826,
            541827,
            541828
        ].includes(problem.id))
    },
    {
        id: 34002261,
        is_full_exam_version: true,
        description_content: "<p align=\"justify\">При выполнении заданий с кратким ответом впишите в поле для ответа цифру, которая соответствует номеру правильного ответа, или число, слово, последовательность букв (слов) или цифр. Ответ следует записывать без пробелов и каких-либо дополнительных символов. Дробную часть отделяйте от целой десятичной запятой. Единицы измерений писать не нужно.</p><p align=\"justify\">Если вариант задан учителем, вы можете вписать или загрузить в систему ответы к заданиям с развернутым ответом. Учитель увидит результаты выполнения заданий с кратким ответом и сможет оценить загруженные ответы к заданиям с развернутым ответом. Выставленные учителем баллы отобразятся в вашей статистике.</p>",
        problems: problems_list.filter((problem) => [
            548371,
            548372,
            548373,
            548374,
            548375,
            548376,
            548377,
            548378,
            548379,
            548380,
            548381,
            548382,
            548383,
            548384,
            548385,
            548386,
            548387,
            548388,
            548389
        ].includes(problem.id))
    }
];