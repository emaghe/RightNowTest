import React, { useState } from 'react';
import { ChevronLeft, Globe, CheckCircle, XCircle, Clock } from 'lucide-react';

// Translations configuration
const translations = {
  en: {
    title: "The Right Now Test",
    subtitle: "A simple decision framework for immediate action",
    languageSelector: "Language",
    restart: "Restart Test",
    back: "Back",
    yes: "Yes",
    no: "No",
    questions: {
      rightNow: "Would I do this right now?"
    },
    results: {
      sayNo: {
        title: "Say no!",
        description: "If you wouldn't do it right now, it's probably not worth doing at all. Trust your instincts.",
        icon: "❌"
      },
      takeIt: {
        title: "Take it on!",
        description: "Your immediate enthusiasm is a great indicator. When something feels right now, go for it!",
        icon: "✅"
      }
    }
  },
  it: {
    title: "Il Test del Subito",
    subtitle: "Un framework semplice per decisioni immediate",
    languageSelector: "Lingua",
    restart: "Ricomincia Test",
    back: "Indietro",
    yes: "Sì",
    no: "No",
    questions: {
      rightNow: "Lo farei proprio adesso?"
    },
    results: {
      sayNo: {
        title: "Rifiuta!",
        description: "Se non lo faresti subito, probabilmente non vale la pena farlo. Fidati del tuo istinto.",
        icon: "❌"
      },
      takeIt: {
        title: "Accettalo!",
        description: "Il tuo entusiasmo immediato è un ottimo indicatore. Quando qualcosa ti sembra giusto subito, vai avanti!",
        icon: "✅"
      }
    }
  },
  fr: {
    title: "Le Test du Maintenant",
    subtitle: "Un cadre simple pour les décisions immédiates",
    languageSelector: "Langue",
    restart: "Recommencer Test",
    back: "Retour",
    yes: "Oui",
    no: "Non",
    questions: {
      rightNow: "Est-ce que je ferais cela maintenant?"
    },
    results: {
      sayNo: {
        title: "Refusez!",
        description: "Si vous ne le feriez pas maintenant, cela ne vaut probablement pas la peine. Faites confiance à votre instinct.",
        icon: "❌"
      },
      takeIt: {
        title: "Acceptez-le!",
        description: "Votre enthousiasme immédiat est un excellent indicateur. Quand quelque chose semble juste maintenant, allez-y!",
        icon: "✅"
      }
    }
  },
  es: {
    title: "La Prueba del Ahora",
    subtitle: "Un marco simple para decisiones inmediatas",
    languageSelector: "Idioma",
    restart: "Reiniciar Test",
    back: "Atrás",
    yes: "Sí",
    no: "No",
    questions: {
      rightNow: "¿Haría esto ahora mismo?"
    },
    results: {
      sayNo: {
        title: "¡Di que no!",
        description: "Si no lo harías ahora mismo, probablemente no vale la pena hacerlo. Confía en tu instinto.",
        icon: "❌"
      },
      takeIt: {
        title: "¡Tómalo!",
        description: "Tu entusiasmo inmediato es un gran indicador. Cuando algo se siente correcto ahora, ¡adelante!",
        icon: "✅"
      }
    }
  }
};

const RightNowTestApp = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentStep, setCurrentStep] = useState('start');

  const t = translations[currentLanguage];

  const handleAnswer = (answer) => {
    if (answer === 'yes') {
      setCurrentStep('takeIt');
    } else {
      setCurrentStep('sayNo');
    }
  };

  const restart = () => {
    setCurrentStep('start');
  };

  const renderLanguageSelector = () => (
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <a href="https://duckintosh.com/">Duckintosh</a>
        <Globe className="w-5 h-5 text-purple-600" />
        <select
            value={currentLanguage}
            onChange={(e) => setCurrentLanguage(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
      </div>
  );

  const renderCredits = () => (
      <div className="flex items-center gap-2 mb-6">
        Credits <a href="https://www.the5typesofwealth.com/" target="_blank">The 5 Types Of Wealth</a>
      </div>
  );

  const renderQuestion = () => (
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 max-w-2xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 px-2 leading-tight">
            {t.questions.rightNow}
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
              onClick={() => handleAnswer('yes')}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors shadow-lg w-full sm:w-auto"
          >
            <CheckCircle className="w-5 h-5" />
            {t.yes}
          </button>
          <button
              onClick={() => handleAnswer('no')}
              className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors shadow-lg w-full sm:w-auto"
          >
            <XCircle className="w-5 h-5" />
            {t.no}
          </button>
        </div>
      </div>
  );

  const renderResult = (resultKey) => {
    const result = t.results[resultKey];
    const isPositive = resultKey === 'takeIt';

    return (
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 max-w-2xl mx-auto text-center">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 ${isPositive ? 'bg-green-100' : 'bg-red-100'} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
            <span className="text-3xl sm:text-4xl">{result.icon}</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${isPositive ? 'text-green-600' : 'text-red-600'} px-2`}>
            {result.title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 px-2">
            {result.description}
          </p>
          <button
              onClick={restart}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto"
          >
            {t.restart}
          </button>
        </div>
    );
  };

  const renderContent = () => {
    switch (currentStep) {
      case 'start':
        return (
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">{t.title}</h1>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 px-2">{t.subtitle}</p>
              <button
                  onClick={() => setCurrentStep('question')}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors shadow-lg w-full sm:w-auto"
              >
                Start Test
              </button>
            </div>
        );

      case 'question':
        return renderQuestion();

      case 'sayNo':
        return renderResult('sayNo');

      case 'takeIt':
        return renderResult('takeIt');

      default:
        return null;
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-3 sm:p-4">
        <div className="container mx-auto py-4 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
            {renderLanguageSelector()}
            {currentStep === 'question' && (
                <button
                    onClick={() => setCurrentStep('start')}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors self-start sm:self-auto"
                >
                  <ChevronLeft className="w-5 h-5" />
                  {t.back}
                </button>
            )}
            {renderCredits()}
          </div>

          {renderContent()}

          {/* Simple indicator for question step */}
          {currentStep === 'question' && (
              <div className="mt-6 sm:mt-8 flex justify-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
          )}
        </div>
      </div>
  );
};

export default RightNowTestApp;