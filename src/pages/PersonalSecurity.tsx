import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PersonalSecurity = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-2xl font-bold tracking-tight">Люди в Чёрном</span>
            </div>
            <Button variant="ghost" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Icon name="UserCheck" size={60} className="text-primary mb-4" />
              <h1 className="text-5xl font-bold mb-4">Личная охрана</h1>
              <p className="text-xl text-muted-foreground">
                Профессиональное сопровождение опытным телохранителем 24/7
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Shield" size={24} className="text-primary" />
                    Круглосуточная защита
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Персональный телохранитель всегда рядом, обеспечивая вашу безопасность в любое время суток
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" size={24} className="text-primary" />
                    Опытные специалисты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Все телохранители имеют опыт службы в спецподразделениях и регулярно проходят переподготовку
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Eye" size={24} className="text-primary" />
                    Конфиденциальность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Строгое соблюдение конфиденциальности и неразглашение личной информации клиента
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Activity" size={24} className="text-primary" />
                    Оценка рисков
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Постоянный мониторинг ситуации и превентивные меры по предотвращению угроз
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary shadow-lg shadow-primary/20 mb-8">
              <CardHeader>
                <CardTitle className="text-3xl">Стоимость услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">₽1.300.000</span>
                    <span className="text-xl text-muted-foreground">/месяц</span>
                  </div>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      1 персональный телохранитель круглосуточно
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Связь по защищенным каналам 24/7
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Профессиональное снаряжение и экипировка
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Полное медицинское сопровождение
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Координация с другими службами безопасности
                    </p>
                  </div>

                  <Button size="lg" className="w-full text-lg" onClick={() => navigate('/#contact')}>
                    Заказать услугу
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Дополнительные опции</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Plus" size={18} className="text-primary" />
                  Второй телохранитель: +₽150,000/месяц
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Plus" size={18} className="text-primary" />
                  Бронированный автомобиль с водителем: +₽95,000/месяц
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Plus" size={18} className="text-primary" />
                  Международное сопровождение: по запросу
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-secondary py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Люди в Чёрном. Все права защищены. Лицензия ЧОО №123456</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalSecurity;