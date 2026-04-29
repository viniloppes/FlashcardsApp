import { Component, computed, signal } from '@angular/core';

interface Flashcard {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-deck-list',
  standalone: false,
  templateUrl: './deck-list.html',
  styleUrl: './deck-list.css',
})
export class DeckList {
  public cards: Flashcard[] = [
    {
      question: 'What is the difference between var, let, and const?',
      answer: 'In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.',
    },
    {
      question: 'What is Angular and how is it different from AngularJS?',
      answer: 'Angular is a modern TypeScript-based front-end framework maintained by Google. Unlike AngularJS (v1), Angular uses components, TypeScript, RxJS, dependency injection, and a modular architecture. AngularJS was JavaScript-based and used controllers and $scope.'
    },
    {
      question: 'What is a component in Angular?',
      answer: 'A component is the main building block of an Angular application. It controls a part of the UI and consists of a TypeScript class, an HTML template, and optional CSS styles.'
    },
    {
      question: 'What is a module (NgModule)?',
      answer: 'An NgModule organizes related components, directives, pipes, and services into a cohesive block. Every Angular app has at least one module: AppModule.'
    },
    {
      question: 'What is data binding in Angular?',
      answer: 'Data binding connects the component class and the template. Angular supports four types: interpolation {{ }}, property binding [prop], event binding (event), and two-way binding [(ngModel)].'
    },
    {
      question: 'What is dependency injection in Angular?',
      answer: 'Dependency Injection is a design pattern where Angular provides required services to components automatically, improving modularity, testing, and reusability.'
    },
    {
      question: 'What are Angular services?',
      answer: 'Services are classes used to share business logic, data, or functions across components. They are typically provided via dependency injection.'
    },
    {
      question: 'What is RxJS and why is it used in Angular?',
      answer: 'RxJS is a library for reactive programming using Observables. Angular uses it heavily for handling asynchronous operations like HTTP requests and events.'
    },
    {
      question: 'What is an Observable?',
      answer: 'An Observable is a stream of data that can emit multiple values over time. Components subscribe to observables to receive asynchronous data.'
    },
    {
      question: 'What is the difference between Promise and Observable?',
      answer: 'A Promise emits a single value once, while an Observable can emit multiple values over time and can be cancelled using unsubscribe.'
    },
    {
      question: 'What is Angular routing?',
      answer: 'Angular routing allows navigation between different views in a single-page application using the Angular Router.'
    },
    {
      question: 'What is lazy loading?',
      answer: 'Lazy loading loads feature modules only when they are needed, reducing initial bundle size and improving performance.'
    },
    {
      question: 'What are directives in Angular?',
      answer: 'Directives extend HTML functionality. There are three types: component directives, structural directives (like *ngIf, *ngFor), and attribute directives (like ngClass).'
    },
    {
      question: 'What is the difference between *ngIf and [hidden]?',
      answer: '*ngIf removes/adds elements from the DOM, while [hidden] only toggles CSS visibility but keeps the element in the DOM.'
    },
    {
      question: 'What is Change Detection?',
      answer: 'Change detection is the process Angular uses to update the DOM when component data changes.'
    },
    {
      question: 'What is OnPush change detection strategy?',
      answer: 'OnPush tells Angular to run change detection only when input references change or events occur, improving performance.'
    },
    {
      question: 'What is the purpose of trackBy in *ngFor?',
      answer: 'trackBy helps Angular identify list items uniquely, preventing unnecessary DOM re-rendering and improving performance.'
    },
    {
      question: 'What are Pipes in Angular?',
      answer: 'Pipes transform data in templates, such as formatting dates, currency, or text.'
    },
    {
      question: 'What is the async pipe?',
      answer: 'The async pipe automatically subscribes to Observables or Promises and unsubscribes when the component is destroyed.'
    },
    {
      question: 'What is the Angular CLI?',
      answer: 'Angular CLI is a command-line tool used to create, build, test, and manage Angular applications.'
    },
    {
      question: 'How do you communicate between components?',
      answer: 'Common methods include @Input/@Output, shared services, RxJS Subjects/BehaviorSubjects, and Angular Router.'
    }
  ];

  public currentIndex = signal(0);
  public showingAnswer = signal(false);

  public currentCard = computed(() => this.cards[this.currentIndex()]);
  public totalCards = computed(() => this.cards.length);
  public percentage = computed(() =>
    Math.round(((this.currentIndex() + 1) / this.totalCards()) * 100)
  );

  public onPrevious(): void {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(v => v - 1);
      this.showingAnswer.set(false);
    }
  }

  public onNext(): void {
    if (this.currentIndex() < this.totalCards() - 1) {
      this.currentIndex.update(v => v + 1);
      this.showingAnswer.set(false);
    }
  }

  public onToggleAnswer(): void {
    this.showingAnswer.update(v => !v);
  }
}
