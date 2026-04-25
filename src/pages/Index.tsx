import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">СайтПодКлюч</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                О нас
              </a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Услуги
              </a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                Проекты
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Принимаем заявки</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Сайт для вашего бизнеса <span className="text-blue-600">за 5 дней</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Соберём, наполним и научим управлять. Вы сможете принимать заявки клиентов
                уже на следующий день после запуска.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Заказать сайт
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Смотреть примеры
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Rocket" className="h-6 w-6" />
                    <span className="font-semibold">Сайт готов за 5 дней</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Zap" className="h-6 w-6" />
                    <span className="font-semibold">Первые заявки на следующий день</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Users" className="h-6 w-6" />
                    <span className="font-semibold">Обучаем управлению сайтом</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">О нас</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Делаем сайты под ключ для малого и среднего бизнеса — быстро, профессионально и без лишних слов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Мы берём на себя всё</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                За 5+ лет работы мы запустили сотни сайтов для бизнесов — от небольших кафе и мастерских
                до медицинских клиник и интернет-магазинов. Вы занимаетесь своим делом, мы — сайтом.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Создаём</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Дизайн</Badge>
                    <Badge variant="secondary">Вёрстка</Badge>
                    <Badge variant="secondary">Мобильная версия</Badge>
                    <Badge variant="secondary">SEO</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Настраиваем</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Форма заявок</Badge>
                    <Badge variant="secondary">Аналитика</Badge>
                    <Badge variant="secondary">Домен</Badge>
                    <Badge variant="secondary">Хостинг</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/b7415462-77a7-4357-ab1a-6fbe3f004423/files/d2de67e7-357b-4f74-a011-a9bd01536e9f.jpg"
                alt="Команда за работой"
                className="rounded-2xl shadow-lg w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Что входит в услугу</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Полный пакет — от разработки до обучения, всё включено в одну цену
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Layers" className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Разработка сайта</CardTitle>
                <CardDescription>
                  Профессиональный дизайн и вёрстка с учётом специфики вашего бизнеса.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* Уникальный дизайн под бренд</li>
                  <li>* Адаптация под мобильные</li>
                  <li>* Страница услуг и о компании</li>
                  <li>* Быстрая загрузка страниц</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Наполнение контентом</CardTitle>
                <CardDescription>Заполним сайт текстами, фото и описаниями — вам не придётся ничего делать.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* Написание продающих текстов</li>
                  <li>* Подбор и обработка фото</li>
                  <li>* Описание услуг и цен</li>
                  <li>* Настройка SEO-заголовков</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Обучение управлению</CardTitle>
                <CardDescription>Покажем, как самостоятельно редактировать сайт и добавлять новые материалы.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* Видеоинструкции по управлению</li>
                  <li>* Онлайн-обучение с менеджером</li>
                  <li>* Поддержка 30 дней после сдачи</li>
                  <li>* Чат для быстрых вопросов</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Наши работы</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Сайты, которые уже приносят заявки нашим клиентам
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                <img
                  src="https://cdn.poehali.dev/projects/b7415462-77a7-4357-ab1a-6fbe3f004423/files/c5c3185a-3dcf-42cd-afdf-a75684b1297d.jpg"
                  alt="Сайт для стоматологии"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Стоматологическая клиника</CardTitle>
                    <CardDescription>
                      Многостраничный сайт с онлайн-записью и каталогом услуг. Запущен за 4 дня.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="ExternalLink" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Медицина</Badge>
                  <Badge variant="outline">Онлайн-запись</Badge>
                  <Badge variant="outline">SEO</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>+35 новых клиентов в первый месяц</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-green-500 to-blue-600">
                <img
                  src="https://cdn.poehali.dev/projects/b7415462-77a7-4357-ab1a-6fbe3f004423/files/b15514e7-f1a5-4bf7-9395-34bc8dd32db6.jpg"
                  alt="Интернет-магазин"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Интернет-магазин мебели</CardTitle>
                    <CardDescription>
                      Каталог с фильтрами, корзиной и онлайн-оплатой. Клиент обучен за 2 часа.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="ExternalLink" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Магазин</Badge>
                  <Badge variant="outline">Оплата онлайн</Badge>
                  <Badge variant="outline">Каталог</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>Окупился за 3 недели</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готовы запустить ваш сайт?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Оставьте заявку — обсудим задачу и назовём стоимость уже сегодня.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Работаем с малым и средним бизнесом по всей России. Консультация бесплатная —
                расскажем, как будет выглядеть ваш сайт и что для этого нужно.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-slate-300">+7 (000) 000-00-00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <p className="text-slate-300">@siteunderkey</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-slate-300">
                  Расскажите о своём бизнесе — мы свяжемся в течение часа.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Телефон</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+7 (999) 999-99-99"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">О вашем бизнесе</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Чем занимаетесь? Что хотите получить от сайта?"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-white mb-4 md:mb-0">СайтПодКлюч</div>
            <p className="text-center md:text-right">
              © 2024 СайтПодКлюч. Сайт для вашего бизнеса за 5 дней — под ключ.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}