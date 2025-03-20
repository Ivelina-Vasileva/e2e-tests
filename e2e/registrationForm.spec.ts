import { test, expect } from '@playwright/test';
import { RegisterPage} from './pages/RegisterPage';

test('Generic registration form', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.goto();
  await registerPage.fillRegistrationForm;
  await registerPage.submitRegistration;
  await registerPage.verifyRegistrationSuccess;

  await page.close()
});
