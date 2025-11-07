import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const LegalSupport = () => {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);

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
              <Icon name="Scale" size={60} className="text-primary mb-4" />
              <h1 className="text-5xl font-bold mb-4">Правовая помощь</h1>
              <p className="text-xl text-muted-foreground">
                Профессиональная юридическая поддержка в вопросах безопасности
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FileText" size={24} className="text-primary" />
                    Правовое сопровождение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Полное юридическое сопровождение вопросов личной и корпоративной безопасности
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FileCheck" size={24} className="text-primary" />
                    Оформление документов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Подготовка и оформление всех необходимых документов для охранной деятельности
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageSquare" size={24} className="text-primary" />
                    Консультации юристов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Квалифицированные консультации по вопросам безопасности и защиты прав
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Gavel" size={24} className="text-primary" />
                    Судебное представительство
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Представление интересов клиента в судах по вопросам безопасности
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary shadow-lg shadow-primary/20 mb-8">
              <CardHeader>
                <CardTitle className="text-3xl">Предлагаемые услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <Icon name="MessageSquare" size={24} className="text-primary mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Юридическая консультация</p>
                      <p className="text-muted-foreground">от 5 000 рублей</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <Icon name="Briefcase" size={24} className="text-primary mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Выезд личного адвоката</p>
                      <p className="text-muted-foreground">от 30 000 рублей в час</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <Icon name="Calendar" size={24} className="text-primary mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Юридическое сопровождение на календарный день</p>
                      <p className="text-muted-foreground">по договорённости</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <Icon name="Gavel" size={24} className="text-primary mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Сопровождение в суде всех инстанций</p>
                      <p className="text-muted-foreground">по договорённости</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <Icon name="Scale" size={24} className="text-primary mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Арбитражный процесс</p>
                      <p className="text-muted-foreground">по договорённости</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full text-lg" onClick={() => setShowContactModal(true)}>
                  Заказать услугу
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowContactModal(false)}>
          <div className="bg-background rounded-lg shadow-xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Связаться с нами</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowContactModal(false)}>
                <Icon name="X" size={24} />
              </Button>
            </div>

            <div className="space-y-4">
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
        </div>
      )}
    </div>
  );
};

export default LegalSupport;