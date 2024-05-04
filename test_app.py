from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
url="http://localhost:8080"
driver.get(url)
time.sleep(2)

def test_register_user():
    menu_register_user = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/header/nav/a[2]')
    menu_register_user.click()
    time.sleep(2)

    document = driver.find_element(By.XPATH, '//*[@id="documentType"]')
    document.send_keys("Cédula de Ciudadanía")

    document = driver.find_element(By.XPATH, '//*[@id="document"]')
    document.send_keys("123456789")

    document = driver.find_element(By.XPATH, '//*[@id="name"]')
    document.send_keys("Usuario de Prueba")

    document = driver.find_element(By.XPATH, '//*[@id="birthday"]')
    document.send_keys("06/06/1996")

    document = driver.find_element(By.XPATH, '//*[@id="phone"]')
    document.send_keys("300876543")

    document = driver.find_element(By.XPATH, '//*[@id="email"]')
    document.send_keys("prueba@prueba.com")

    time.sleep(2)

    btn_register = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div/form/button')
    btn_register.click()

    time.sleep(2)

    alert = driver.switch_to.alert
    alert.accept()

    time.sleep(2)


def go_to_home():
    menu_home = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/header/nav/a[1]')
    menu_home.click()
    time.sleep(2)



def test_consult_user():
    go_to_home()
    menu_consultar_user = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/header/nav/a[3]')
    menu_consultar_user.click()
    time.sleep(2)


def test_register_activity():
    go_to_home()
    menu_register_activity = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/header/nav/a[4]')
    menu_register_activity.click()
    time.sleep(2)

    document = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div/form/div[1]/select')
    document.send_keys("Usuario de Prueba")

    document = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div/form/div[2]/input')
    document.send_keys("Cita medica")

    document = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div/form/div[3]/input')
    document.send_keys("06/06/2024")

    document = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div/form/div[4]/input')
    document.send_keys("13:00")

    document = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div/form/div[5]/input')
    document.send_keys("14:00")

    time.sleep(2)

    btn_register = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/div/form/button')
    btn_register.click()

    time.sleep(2)

    alert = driver.switch_to.alert
    alert.accept()

    time.sleep(2)

def test_consult_activity():
    go_to_home()
    menu_consultar_activity = driver.find_element(By.XPATH, '//*[@id="root"]/div/div/header/nav/a[5]')
    menu_consultar_activity.click()
    time.sleep(2)