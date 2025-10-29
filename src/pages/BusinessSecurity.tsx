import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BusinessSecurity = () => {
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
              <Icon name="Briefcase" size={60} className="text-primary mb-4" />
              <h1 className="text-5xl font-bold mb-4">Деловая безопасность</h1>
              <p className="text-xl text-muted-foreground">
                Комплексная защита при проведении деловых встреч и переговоров
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="ShieldCheck" size={24} className="text-primary" />
                    Охрана переговоров
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Обеспечение безопасности во время важных деловых встреч и переговоров
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="SearchCheck" size={24} className="text-primary" />
                    Проверка помещений
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Техническая проверка помещений на наличие подслушивающих устройств
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FileCheck" size={24} className="text-primary" />
                    Контроль информации
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Защита конфиденциальной информации и контроль утечек данных
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-primary" />
                    Проверка контрагентов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Предварительная проверка деловых партнёров и участников встречи
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
                    <span className="text-5xl font-bold text-primary">₽145,000</span>
                    <span className="text-xl text-muted-foreground">/месяц</span>
                  </div>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      До 10 охраняемых встреч в месяц
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Техническая проверка помещений перед встречей
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Команда из 2-3 специалистов на встрече
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Базовая проверка контрагентов
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      Защита от прослушки и видеозаписи
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
                  Дополнительные встречи: ₽15,000 за встречу
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Plus" size={18} className="text-primary" />
                  Углубленная проверка контрагентов: ₽25,000 за человека
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Plus" size={18} className="text-primary" />
                  Личное сопровождение руководителя: +₽85,000/месяц
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

export default BusinessSecurity;
