pipeline {

    agent any

    stages {

        stage('Cypress Parallel Test Suite') {

            parallel {

                stage('Slave 1') {

                    agent {
                        label 'Agente1_1'
                    }

                    steps {
                        git url: 'https://github.com/sbravo98/CursoCypressParaleloPipline.git'

                        bat 'npm install'
                        bat 'npx cypress run --record --key 91f1b105-b716-4490-bcd1-537691154f27 --parallel --ci-build-id %BUILD_NUMBER%'
                    }
                }

                stage('Slave 2') {

                    agent {
                        label 'Agente1_2'
                    }

                    steps {
                        git url: 'https://github.com/sbravo98/CursoCypressParaleloPipline.git'

                        bat 'npm install'
                        bat 'npx cypress run --record --key 91f1b105-b716-4490-bcd1-537691154f27 --parallel --ci-build-id %BUILD_NUMBER%'
                    }
                }

                stage('Slave 3') {

                    agent {
                        label 'Agente1_3'
                    }

                    steps {
                        git url: 'https://github.com/sbravo98/CursoCypressParaleloPipline.git'

                        bat 'npm install'
                        bat 'npx cypress run --record --key 91f1b105-b716-4490-bcd1-537691154f27 --parallel --ci-build-id %BUILD_NUMBER%'
                    }
                }
            }
        }
    }
}