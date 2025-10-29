import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-2xl font-bold tracking-tight">Люди в Чёрном</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">
                Команда
              </button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
                Контакты
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('team')} className="text-left hover:text-primary transition-colors">
                Команда
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background z-10"></div>
          <img 
            src="https://cdn.poehali.dev/projects/4e2a6299-af12-423f-b91b-6eee2580b228/files/5d05955e-ec80-4a0a-85f0-2da01061da1f.jpg"
            alt="Профессиональная охрана"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Профессиональная защита<br />
                <span className="text-primary">24/7</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Элитные услуги личной охраны и безопасности для VIP-персон, бизнесменов и их семей
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" onClick={() => scrollToSection('contact')}>
                  Заказать консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Полный спектр услуг персональной охраны
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <Icon name="UserCheck" size={40} className="text-primary mb-4" />
                  <CardTitle>Личная охрана</CardTitle>
                  <CardDescription>
                    Профессиональное сопровождение телохранителем 24/7
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Круглосуточная защита
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Опытные специалисты
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Конфиденциальность
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <Icon name="Car" size={40} className="text-primary mb-4" />
                  <CardTitle>Сопровождение</CardTitle>
                  <CardDescription>
                    Безопасное сопровождение на мероприятия и в поездках
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Планирование маршрута
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Контроль безопасности
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Бронированный транспорт
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <Icon name="Home" size={40} className="text-primary mb-4" />
                  <CardTitle>Охрана объектов</CardTitle>
                  <CardDescription>
                    Защита жилых и коммерческих объектов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Видеонаблюдение
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Контроль доступа
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Патрулирование
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <Icon name="Users" size={40} className="text-primary mb-4" />
                  <CardTitle>Защита семьи</CardTitle>
                  <CardDescription>
                    Комплексная безопасность для всей семьи
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Охрана детей
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Сопровождение супруги
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Защита дома
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <Icon name="Briefcase" size={40} className="text-primary mb-4" />
                  <CardTitle>Деловая безопасность</CardTitle>
                  <CardDescription>
                    Защита при проведении деловых встреч
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Охрана переговоров
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Проверка помещений
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Контроль информации
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <Icon name="Plane" size={40} className="text-primary mb-4" />
                  <CardTitle>Международная охрана</CardTitle>
                  <CardDescription>
                    Безопасность в международных поездках
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Сопровождение за рубежом
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Знание языков
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Международные связи
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="team" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наша команда</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Элитные специалисты с опытом работы в спецслужбах
            </p>

            <div className="relative mb-12">
              <img 
                src="https://cdn.poehali.dev/projects/4e2a6299-af12-423f-b91b-6eee2580b228/files/dfa4ec7f-9935-44e3-bbf8-cd7b6b950abb.jpg"
                alt="Команда профессионалов"
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-lg"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-secondary rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Award" size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Опыт 15+ лет</h3>
                <p className="text-muted-foreground">
                  Все сотрудники имеют опыт службы в элитных подразделениях
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="GraduationCap" size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Профессионализм</h3>
                <p className="text-muted-foreground">
                  Постоянное обучение и повышение квалификации персонала
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="CheckCircle" size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Надёжность</h3>
                <p className="text-muted-foreground">
                  100% выполнение поставленных задач по защите клиентов
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Тарифы</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Выберите подходящий уровень защиты
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Базовый</CardTitle>
                  <CardDescription>Для повседневной защиты</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₽150,000</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>1 телохранитель</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Дневное время (12ч)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Базовое оборудование</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Связь 24/7</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" onClick={() => scrollToSection('contact')}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary shadow-lg shadow-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold">
                  Популярный
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Премиум</CardTitle>
                  <CardDescription>Максимальная безопасность</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₽350,000</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>2 телохранителя</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Круглосуточно 24/7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Продвинутое оборудование</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Бронированный транспорт</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Охрана объектов</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" onClick={() => scrollToSection('contact')}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">VIP</CardTitle>
                  <CardDescription>Полный комплекс услуг</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₽750,000</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Команда 4+ человек</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Круглосуточно 24/7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Элитное оборудование</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Парк бронированных машин</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Международная охрана</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>Защита семьи и объектов</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" onClick={() => scrollToSection('contact')}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Связаться с нами</h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут
              </p>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ваше имя
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Иван Иванов" 
                        className="bg-secondary border-border"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Телефон
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67" 
                        className="bg-secondary border-border"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="ivan@example.com" 
                        className="bg-secondary border-border"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Сообщение
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Расскажите о ваших потребностях в охране..." 
                        rows={5}
                        className="bg-secondary border-border"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Отправить заявку
                    </Button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <Icon name="Phone" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Телефон</p>
                          <p className="text-muted-foreground">+7 (495) 000-00-00</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Icon name="Mail" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">info@mib-security.ru</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Icon name="MapPin" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Адрес</p>
                          <p className="text-muted-foreground">Москва, Кутузовский пр-т, д. 12</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Icon name="Clock" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Режим работы</p>
                          <p className="text-muted-foreground">Круглосуточно, без выходных</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" className="text-primary" size={28} />
                <span className="text-xl font-bold">Люди в Чёрном</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная охрана и безопасность с 2008 года
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Личная охрана</li>
                <li>Сопровождение</li>
                <li>Охрана объектов</li>
                <li>Защита семьи</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Команда</li>
                <li>Лицензии</li>
                <li>Вакансии</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 000-00-00</li>
                <li>info@mib-security.ru</li>
                <li>Москва, Кутузовский пр-т, 12</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Люди в Чёрном. Все права защищены. Лицензия ЧОО №123456</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;