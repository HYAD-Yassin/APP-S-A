import { Component, OnDestroy, OnInit, Input , effect } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ChartOptions } from '../../../shared/models/chart-options';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TransactionService  } from '../../service/transaction.service';


@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [AngularSvgIconModule, NgApexchartsModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})


export class TransactionsComponent implements OnInit, OnDestroy {

  public chartOptions: Partial<ChartOptions>;
  cardIds: number[] = JSON.parse(localStorage.getItem('cardIds') || '[]');
  finalBalance : number = 0;


  constructor(private themeService: ThemeService , private transactionService: TransactionService) {
    let baseColor = '#FFFFFF';
 
    let allTransactions: any[] = [];
    let balance = 1000; 
    const data: number[] = [];
    const categories: string[] = [];

  
    this.cardIds.forEach((cardId) => {
      this.transactionService.getTransactions(cardId).subscribe(
        (transactions) => {
          
          
          allTransactions = [...allTransactions, ...transactions];
  

          // Sort transactions by date
          allTransactions.sort((a, b) => new Date(a.transactionDate).getTime() - new Date(b.transactionDate).getTime());
  


          // Reset data to rebuild it after sorting
          data.length = 0;
          categories.length = 0;
          this.finalBalance = 0;
  

          console.log(`All Transactions  :`, allTransactions); // Sort  TEST 


          allTransactions.forEach((transaction) => {
            balance += transaction.amount;
            data.push(balance);

            // Properly format date
        const formattedDate = new Date(transaction.transactionDate).toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: '2-digit'
        });
        categories.push(formattedDate);


          });

          this.finalBalance = balance;

          console.log(`Final Balance  :`, this.finalBalance);

  
          // Update chart options
          this.chartOptions.series = [{ name: 'Balance', data }];
          this.chartOptions.xaxis = { ...this.chartOptions.xaxis, categories };
        },
        (error) => {
          console.error(`Error fetching transactions for card ${cardId}:`, error);
        }
      );
    });

    this.chartOptions = {
      series: [
        {
          name: 'Etherium',
          data: data,
        },
      ],
      chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: 150,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.2,
          stops: [15, 120, 100],
        },
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [baseColor], // line color
      },
      xaxis: {
        categories: categories,
        labels: {
          show: false,
        },
        crosshairs: {
          position: 'front',
          stroke: {
            color: baseColor,
            width: 1,
            dashArray: 4,
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      tooltip: {
        theme: 'light',
        y: {
          formatter: function (val) {
            return val + '$';
          },
        },
      },
      colors: [baseColor], //line colors
    };

    effect(() => {
      /** change chart theme */
      let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
      primaryColor = this.HSLToHex(primaryColor);
      this.chartOptions.tooltip = {
        theme: this.themeService.theme().mode,
      };
      this.chartOptions.colors = [primaryColor];
      this.chartOptions.stroke!.colors = [primaryColor];
      this.chartOptions.xaxis!.crosshairs!.stroke!.color = primaryColor;
    });
  }

  private HSLToHex(color: string): string {
    const colorArray = color.split('%').join('').split(' ');
    const colorHSL = colorArray.map(Number);
    const hsl = {
      h: colorHSL[0],
      s: colorHSL[1],
      l: colorHSL[2],
    };

    const { h, s, l } = hsl;

    const hDecimal = l / 100;
    const a = (s * Math.min(hDecimal, 1 - hDecimal)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = hDecimal - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

      // Convert to Hex and prefix with "0" if required
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {}



}





