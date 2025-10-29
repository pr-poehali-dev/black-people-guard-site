import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PropertySecurity = () => {
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
              <Icon name="Home" size={60} className="text-primary mb-4" />
              <h1 className="text-5xl font-bold mb-4">Охрана объектов</h1>
              <p className="text-xl text-muted-foreground">
                Профессиональная защита жилых и коммерческих объектов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Camera" size={24} className="text-primary" />
                    Видеонаблюдение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Установка и обслуживание современных систем видеонаблюдения с записью и онлайн-доступом
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="KeyRound" size={24} className="text-primary" />
                    Контроль доступа
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Современные системы контроля доступа с биометрией и электронными пропусками
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-primary" />
                    Патрулирование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Регулярное патрулирование территории подготовленными сотрудниками охраны
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Bell" size={24} className="text-primary" />
                    Охранная сигнализация
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Интеграция с охранно-пожарной сигнализацией и тревожными кнопками
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
                    <span className="text-5xl font-bold text-primary">₽95,000</span>
                    <span className="text-xl text-muted-foreground">/месяц</span>
                  </div>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      2 охранника на посту (посменно 24/7)
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Система видеонаблюдения (до 16 камер)
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Электронная система контроля доступа
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Патрулирование территории каждые 2 часа
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Связь с группой быстрого реагирования
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
                  Дополнительный охранник: +₽40,000/месяц
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Plus" size={18} className="text-primary" />
                  Расширение видеонаблюдения: ₽3,500 за камеру/месяц
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Plus" size={18} className="text-primary" />
                  Служебная собака: +₽35,000/месяц
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

export default PropertySecurity;
