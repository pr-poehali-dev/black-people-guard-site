import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ContactRequest {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/03a73d54-18fa-4f4d-807e-56f62266cb83');
      const data = await response.json();
      
      if (response.ok) {
        setRequests(data.requests);
      } else {
        setError(data.error || 'Ошибка загрузки данных');
      }
    } catch (err) {
      setError('Ошибка соединения с сервером');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

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
              На главную
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Админ-панель</h1>
                <p className="text-muted-foreground">Все заявки с формы обратной связи</p>
              </div>
              <Button onClick={fetchRequests} variant="outline">
                <Icon name="RefreshCw" size={20} className="mr-2" />
                Обновить
              </Button>
            </div>

            {loading && (
              <div className="text-center py-12">
                <Icon name="Loader2" size={48} className="text-primary animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">Загрузка заявок...</p>
              </div>
            )}

            {error && (
              <Card className="border-red-500 bg-red-50 dark:bg-red-950">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Icon name="AlertCircle" size={24} className="text-red-600" />
                    <p className="text-red-600 dark:text-red-400">{error}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {!loading && !error && requests.length === 0 && (
              <Card className="border-border">
                <CardContent className="pt-6 text-center py-12">
                  <Icon name="Inbox" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">Пока нет заявок</p>
                </CardContent>
              </Card>
            )}

            {!loading && !error && requests.length > 0 && (
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground mb-4">
                  Всего заявок: <span className="font-semibold text-foreground">{requests.length}</span>
                </div>
                
                {requests.map((request) => (
                  <Card key={request.id} className="border-border hover:border-primary transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">
                          {request.name}
                        </CardTitle>
                        <span className="text-sm text-muted-foreground">
                          #{request.id}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(request.created_at)}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Icon name="Phone" size={18} className="text-primary" />
                          <a href={`tel:${request.phone}`} className="hover:underline">
                            {request.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Mail" size={18} className="text-primary" />
                          <a href={`mailto:${request.email}`} className="hover:underline">
                            {request.email}
                          </a>
                        </div>
                      </div>
                      
                      {request.message && (
                        <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                          <p className="text-sm font-medium mb-2 flex items-center gap-2">
                            <Icon name="MessageSquare" size={16} className="text-primary" />
                            Сообщение:
                          </p>
                          <p className="text-muted-foreground whitespace-pre-wrap">
                            {request.message}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
