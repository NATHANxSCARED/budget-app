import React, { useState, useEffect, useRef } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButtons, IonButton, IonIcon, IonSegment, IonSegmentButton,
  IonLabel, IonFab, IonFabButton, IonAlert, IonActionSheet
} from '@ionic/react';
import { add } from 'ionicons/icons';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import '../css/budgets.module.css';

type TimeRange = '1m' | '3m' | '6m';
type BudgetCategory = 'basic' | 'car' | 'house' | 'food' | 'leisure';

interface BudgetChart {
  id: number;
  category: BudgetCategory;
  chartInstance: Chart | null;
}

const Budgets: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('3m');
  const [charts, setCharts] = useState<BudgetChart[]>([{ id: 1, category: 'basic', chartInstance: null }]);
  const [showCategoryAlert, setShowCategoryAlert] = useState(false);
  const chartRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  const getDataForCategory = (category: BudgetCategory) => {
    const baseData = {
      '1m': ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'],
      '3m': ['Jan', 'Fév', 'Mar'],
      '6m': ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun']
    };

    const baseValues = {
      basic: [500, 700, 400, 800, 650, 900],
      car: [300, 450, 200, 350, 400, 250],
      house: [800, 900, 1000, 950, 1100, 1200],
      food: [200, 250, 300, 350, 400, 450],
      leisure: [100, 150, 200, 180, 220, 250]
    };

    return {
      labels: baseData[timeRange],
      datasets: [{
        label: `Dépenses ${getCategoryName(category)}`,
        data: baseValues[category].slice(0, baseData[timeRange].length),
        fill: false,
        borderColor: getCategoryColor(category),
        tension: 0.1,
      }]
    };
  };

  const getCategoryName = (category: BudgetCategory) => {
    const names = {
      basic: 'Basique',
      car: 'Voiture',
      house: 'Maison',
      food: 'Alimentation',
      leisure: 'Loisirs'
    };
    return names[category];
  };

  const getCategoryColor = (category: BudgetCategory) => {
    const colors = {
      basic: 'rgb(54, 72, 241)',
      car: 'rgb(241, 54, 54)',
      house: 'rgb(54, 241, 89)',
      food: 'rgb(241, 163, 54)',
      leisure: 'rgb(163, 54, 241)'
    };
    return colors[category];
  };

  useEffect(() => {
    const updatedCharts = [...charts];
    let chartsUpdated = false;

    charts.forEach((chart, index) => {
      if (chartRefs.current[index]) {
        const ctx = chartRefs.current[index]!.getContext('2d');

        if (chart.chartInstance) {
          chart.chartInstance.destroy();
        }

        const newChartInstance = new Chart(ctx!, {
          type: 'line',
          data: getDataForCategory(chart.category),
          options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (e) => {
              const canvasPosition = getRelativePosition(e, newChartInstance);
              const xValue = newChartInstance.scales.x.getValueForPixel(canvasPosition.x);
              const yValue = newChartInstance.scales.y.getValueForPixel(canvasPosition.y);
              console.log(`Coordonnées cliquées: X=${xValue}, Y=${yValue}`);
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

        updatedCharts[index].chartInstance = newChartInstance;
        chartsUpdated = true;
      }
    });

    if (chartsUpdated) {
      setCharts(updatedCharts);
    }

    return () => {
      charts.forEach(chart => {
        if (chart.chartInstance) {
          chart.chartInstance.destroy();
        }
      });
    };
  }, [timeRange]);

  const handleAddNewChart = () => {
    setShowCategoryAlert(true);
  };

  const addNewChart = (category: BudgetCategory) => {
    const newChart = {
      id: Date.now(),
      category,
      chartInstance: null
    };
    setCharts([...charts, newChart]);
    setShowCategoryAlert(false);
  };

  const removeChart = (id: number) => {
    if (charts.length <= 1) return;

    const chartToRemove = charts.find(chart => chart.id === id);
    if (chartToRemove?.chartInstance) {
      chartToRemove.chartInstance.destroy();
    }

    setCharts(charts.filter(chart => chart.id !== id));
  };

  const categoryOptions = [
    { text: 'Basique', handler: () => addNewChart('basic') },
    { text: 'Voiture', handler: () => addNewChart('car') },
    { text: 'Maison', handler: () => addNewChart('house') },
    { text: 'Alimentation', handler: () => addNewChart('food') },
    { text: 'Loisirs', handler: () => addNewChart('leisure') },
    { text: 'Annuler', role: 'cancel' }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gestion des Budgets</IonTitle>
        </IonToolbar>

        <IonToolbar>
          <IonSegment value={timeRange} onIonChange={e => setTimeRange(e.detail.value as TimeRange)}>
            <IonSegmentButton value="1m">
              <IonLabel>1 mois</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="3m">
              <IonLabel>3 mois</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="6m">
              <IonLabel>6 mois</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {charts.map((chart, index) => (
          <div key={chart.id} className="chart-container">
            <h3 className="chart-title">{getCategoryName(chart.category)}</h3>
            <div className="chart-wrapper">
              <canvas
                ref={el => chartRefs.current[index] = el}
                className="chart-canvas"
              ></canvas>
            </div>
            {charts.length > 1 && (
              <IonButton
                fill="clear"
                color="danger"
                className="remove-chart-button"
                onClick={() => removeChart(chart.id)}
              >
                Supprimer
              </IonButton>
            )}
          </div>
        ))}

        <IonFab vertical="bottom" horizontal="end" slot="fixed" className="add-chart-fab">
          <IonFabButton onClick={handleAddNewChart}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <IonActionSheet
          isOpen={showCategoryAlert}
          onDidDismiss={() => setShowCategoryAlert(false)}
          header="Choisir une catégorie"
          buttons={categoryOptions}
        />
      </IonContent>
    </IonPage>
  );
};

export default Budgets;