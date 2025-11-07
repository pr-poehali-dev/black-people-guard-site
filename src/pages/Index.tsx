import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card 
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                onClick={() => navigate('/service/personal-security')}
              >
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
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                onClick={() => navigate('/service/escort')}
              >
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
                      Автомобиль премиум-класса
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Конфиденциальность
                    </li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                onClick={() => navigate('/service/information-security')}
              >
                <CardHeader>
                  <Icon name="ShieldCheck" size={40} className="text-primary mb-4" />
                  <CardTitle>Информационная безопасность</CardTitle>
                  <CardDescription>
                    Защита цифровых активов и конфиденциальных данных
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Аудит безопасности
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Защита от утечек данных
                    </li>
                    <li className="flex items-center gap-2">Соответствие стандартам </li>
                    <li className="flex items-center gap-2"></li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                onClick={() => navigate('/service/legal-support')}
              >
                <CardHeader>
                  <Icon name="Scale" size={40} className="text-primary mb-4" />
                  <CardTitle>Правовая помощь</CardTitle>
                  <CardDescription>
                    Юридическая поддержка в сфере безопасности
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Консультации юристов
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Оформление документов
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Правовое сопровождение
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Участие в судебных процессах всех инстанций
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Арбитражный процесс
                    </li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-white">
                    <path d="M20 30 L30 20 L50 20 L60 30 L60 50 L40 70 L20 50 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M30 35 L35 40 L50 25" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 40 C15 40 10 35 10 35 L10 25 C10 25 15 20 15 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M65 40 C65 40 70 35 70 35 L70 25 C70 25 65 20 65 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Почему нам доверяют<br />самое ценное?
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              <div>
                <div className="border border-white/30 rounded-full inline-block px-6 py-3 mb-6">
                  <span className="text-lg">1. Элитный кадровый отбор</span>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Наши специалисты исключительно из числа бывших сотрудников спецподразделений с безупречным послужным списком.
                </p>
              </div>

              <div>
                <div className="border border-white/30 rounded-full inline-block px-6 py-3 mb-6">
                  <span className="text-lg">2. «Невидимая» охрана</span>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Наши специалисты обеспечивают вашу безопасность, не привлекая внимания и не нарушая ваш привычный образ жизни.
                </p>
              </div>

              <div>
                <div className="border border-white/30 rounded-full inline-block px-6 py-3 mb-6">
                  <span className="text-lg">3. Индивидуальный подход</span>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Разработка персональных протоколов безопасности для каждого члена семьи и объекта.
                </p>
              </div>

              <div>
                <div className="border border-white/30 rounded-full inline-block px-6 py-3 mb-6">
                  <span className="text-lg">4. Технологии премиум-класса</span>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Используем только лучшее и проверенное оборудование, интегрируемое в вашу smart-среду незаметно.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center text-white/40 text-sm">
              <p></p>
              <p className="flex items-center justify-center gap-2 mt-2"></p>
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
                          <p className="font-medium">WhatsApp</p>
                          <p className="text-muted-foreground">+7-905-729-79-75</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Icon name="Send" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Telegram</p>
                          <p className="text-muted-foreground">+7-993-119-05-12</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Icon name="Mail" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">men_in_black_group@bk.ru</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Icon name="Clock" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Режим работы</p>
                          <p className="text-muted-foreground">С 10:00 до 20:00</p>
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
    </div>
  );
};

export default Index;