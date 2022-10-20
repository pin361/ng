import { Component, OnInit } from '@angular/core';
import { SurveyCreator } from 'survey-creator-knockout';

// import "survey-core/defaultV2.css";
// import "survey-creator-core/survey-creator-core.css";

@Component({
  selector: 'app-survey-creator',
  template: `
      <div id="surveyCreator"></div>
  `,
  styles: [`
    #surveyCreator {
      height: 100vh;
      width: 100vw;
    }
  `],
})
export class AppSurveyCreator implements OnInit {
  ngOnInit(): void {
    const creator = new SurveyCreator({
      showDesignerTab: true,
      showSurveyTitle: true,
    });
    creator.rightContainerActiveItem("toolbox");
    creator.render('surveyCreator');
  }
}
