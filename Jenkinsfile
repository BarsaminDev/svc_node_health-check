pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing##..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....with openshift develop'
                bat 'npm --version'
            }
        }
    }
}