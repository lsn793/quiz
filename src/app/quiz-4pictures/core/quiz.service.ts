import { Injectable }           from '@angular/core';
import { GridComponent }        from './components/grid/grid';
import { QuizItem }             from './quiz-item';

@Injectable()
export class QuizService {
  getFlagsQuiz() {
    return [[//level1
      new QuizItem(GridComponent, "Китай",  {"/flags/images (4).png": true, '/flags/images (3).png':false,'/flags/images (1).png':false,'/flags/images (6).png':false}),
      new QuizItem(GridComponent, "Бразилия", {"/flags/images (8).png": false,'/flags/images (9).png':false,'/flags/images (10).png':false,'/flags/images (11).png':true}),
      new QuizItem(GridComponent, "Греция", {"/flags/images (5).png": false,'/flags/images (6).png':true,'/flags/images (7).png':false,'/flags/images (8).png':false}),
      new QuizItem(GridComponent, "Япония", {"/flags/images (16).png": true,'/flags/images (14).png':true,'/flags/images (15).png':false,'/flags/images (17).png':false}),
      new QuizItem(GridComponent, "Италия", {"/flags/images (13).png": true,'/flags/images.png':false,'/flags/images (12).png':false,'/flags/images (2).png':false}),
      new QuizItem(GridComponent, "Голландия", {"/flags/nl.png": true,'/flags/py.png':false,'/flags/lt.png':false,'/flags/ir.png':false}),
      new QuizItem(GridComponent, "Корея", {"/flags/kr.png": true,'/flags/eg.png':false,'/flags/sn.png':false,'/flags/sg.png':false}),
      new QuizItem(GridComponent, "Ливан", {"/flags/lb.png": true,'/flags/ls.png':false,'/flags/ca.png':false,'/flags/ug.png':false}),
      new QuizItem(GridComponent, "Испания", {"/flags/es.png": true,'/flags/in.png':false,'/flags/bo.png':false,'/flags/tj.png':false}),
      new QuizItem(GridComponent, "ЮАР", {"/flags/images (8).png": true,'/flags/lr.png':false,'/flags/cr.png':false,'/flags/ph.png':false}),
    ],
    [//level2
      new QuizItem(GridComponent, "Хорватия", {"/flags/hr.png": true,'/flags/ph.png':false,'/flags/si.png':false,'/flags/lu.png':false}),
      new QuizItem(GridComponent, "Турция", {"/flags/images (10).png": true,'/flags/sg.png':false,'/flags/mt.png':false,'/flags/lb.png':false}),
      new QuizItem(GridComponent, "Германия",  {"/flags/images (9).png": true,'/flags/images (3).png':false,'/flags/images (1).png':false,'/flags/images (6).png':false}),
      new QuizItem(GridComponent, "Аргентина", {"/flags/images (8).png": false,'/flags/images (9).png':false,'/flags/images (10).png':false,'/flags/images (7).png':true}),
      new QuizItem(GridComponent, "Куба", {"/flags/images (5).png": true,'/flags/images (6).png':false,'/flags/images (7).png':false,'/flags/images (8).png':false}),
      new QuizItem(GridComponent, "Швеция", {"/flags/se.png": true,'/flags/fi.png':false,'/flags/is.png':false,'/flags/do.png':false}),
      new QuizItem(GridComponent, "Гондурас", {"/flags/hn.png": true,'/flags/images (7).png':false,'/flags/is.png':false,'/flags/be.png':false}),
      new QuizItem(GridComponent, "Уругвай", {"/flags/uy.png": true,'/flags/images (6).png':false,'/flags/et.png':false,'/flags/sv.png':false}),
      new QuizItem(GridComponent, "Ямайка", {"/flags/jm.png": true,'/flags/tg.png':false,'/flags/pl.png':false,'/flags/no.png':false}),
      new QuizItem(GridComponent, "Малазия", {"/flags/my.png": true,'/flags/lr.png':false,'/flags/images (5).png':false,'/flags/us.png':false}),
    ],
    [//level3
      new QuizItem(GridComponent, "Новая Зеландия", {"/flags/nz.png": true,'/flags/cr.png':false,'/flags/kz.png':false,'/flags/ht.png':false}),
      new QuizItem(GridComponent, "Болгария", {"/flags/bg.png": true,'/flags/am.png':false,'/flags/ad.png':false,'/flags/gn.png':false}),
      new QuizItem(GridComponent, "Чили",  {"/flags/cl.png": true,'/flags/gq.png':false,'/flags/ss.png':false,'/flags/cz.png':false}),
      new QuizItem(GridComponent, "Перу", {"/flags/pe.png": true,'/flags/at.png':false,'/flags/be.png':false,'/flags/ie.png':false}),
      new QuizItem(GridComponent, "Пакистан", {"/flags/pk.png": true,'/flags/tm.png':false,'/flags/gy.png':false,'/flags/sr.png':false}),
      new QuizItem(GridComponent, "Тринидада и Тобаго", {"/flags/tt.png": true,'/flags/lv.png':false,'/flags/mk.png':false,'/flags/me.png':false}),
      new QuizItem(GridComponent, "Египет", {"/flags/eg.png": true,'/flags/tl.png':false,'/flags/bh.png':false,'/flags/si.png':false}),
      new QuizItem(GridComponent, "Мексика", {"/flags/mx.png": true,'/flags/vc.png':false,'/flags/gn.png':false,'/flags/st.png':false}),
      new QuizItem(GridComponent, "Панама", {"/flags/pa.png": true,'/flags/do.png':false,'/flags/bf.png':false,'/flags/images (6).png':false}),
      new QuizItem(GridComponent, "Финляндия", {"/flags/fi.png": true,'/flags/bw.png':false,'/flags/fr.png':false,'/flags/is.png':false}),
    ],

    ]
  }
}