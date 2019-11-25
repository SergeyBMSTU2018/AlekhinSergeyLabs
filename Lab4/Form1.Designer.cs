namespace Lab4
{
    partial class Form1
    {
        /// <summary>
        /// Обязательная переменная конструктора.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Освободить все используемые ресурсы.
        /// </summary>
        /// <param name="disposing">истинно, если управляемый ресурс должен быть удален; иначе ложно.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Код, автоматически созданный конструктором форм Windows

        /// <summary>
        /// Требуемый метод для поддержки конструктора — не изменяйте 
        /// содержимое этого метода с помощью редактора кода.
        /// </summary>
        private void InitializeComponent()
        {
            this.readFromFile = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.findWordInList = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.downloadTimeLabel = new System.Windows.Forms.Label();
            this.findTimeLabel = new System.Windows.Forms.Label();
            this.findInList = new System.Windows.Forms.Button();
            this.listBox1 = new System.Windows.Forms.ListBox();
            this.SuspendLayout();
            // 
            // readFromFile
            // 
            this.readFromFile.Location = new System.Drawing.Point(12, 12);
            this.readFromFile.Name = "readFromFile";
            this.readFromFile.Size = new System.Drawing.Size(776, 50);
            this.readFromFile.TabIndex = 0;
            this.readFromFile.Text = "Чтение файла";
            this.readFromFile.UseVisualStyleBackColor = true;
            this.readFromFile.Click += new System.EventHandler(this.ReadFromFile_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(507, 164);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(170, 25);
            this.label1.TabIndex = 1;
            this.label1.Text = "Время загрузки";
            // 
            // findWordInList
            // 
            this.findWordInList.Location = new System.Drawing.Point(12, 68);
            this.findWordInList.Name = "findWordInList";
            this.findWordInList.Size = new System.Drawing.Size(647, 31);
            this.findWordInList.TabIndex = 8;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(507, 113);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(152, 25);
            this.label2.TabIndex = 3;
            this.label2.Text = "Время поиска";
            // 
            // downloadTimeLabel
            // 
            this.downloadTimeLabel.AutoSize = true;
            this.downloadTimeLabel.Location = new System.Drawing.Point(699, 164);
            this.downloadTimeLabel.Name = "downloadTimeLabel";
            this.downloadTimeLabel.Size = new System.Drawing.Size(66, 25);
            this.downloadTimeLabel.TabIndex = 4;
            this.downloadTimeLabel.Text = "00:00";
            // 
            // findTimeLabel
            // 
            this.findTimeLabel.AutoSize = true;
            this.findTimeLabel.Location = new System.Drawing.Point(699, 113);
            this.findTimeLabel.Name = "findTimeLabel";
            this.findTimeLabel.Size = new System.Drawing.Size(66, 25);
            this.findTimeLabel.TabIndex = 5;
            this.findTimeLabel.Text = "00:00";
            // 
            // findInList
            // 
            this.findInList.Location = new System.Drawing.Point(673, 68);
            this.findInList.Name = "findInList";
            this.findInList.Size = new System.Drawing.Size(115, 40);
            this.findInList.TabIndex = 6;
            this.findInList.Text = "Найти";
            this.findInList.UseVisualStyleBackColor = true;
            this.findInList.Click += new System.EventHandler(this.FindInList_Click);
            // 
            // listBox1
            // 
            this.listBox1.FormattingEnabled = true;
            this.listBox1.ItemHeight = 25;
            this.listBox1.Location = new System.Drawing.Point(12, 113);
            this.listBox1.Name = "listBox1";
            this.listBox1.Size = new System.Drawing.Size(489, 329);
            this.listBox1.TabIndex = 7;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(12F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.listBox1);
            this.Controls.Add(this.findInList);
            this.Controls.Add(this.findTimeLabel);
            this.Controls.Add(this.downloadTimeLabel);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.findWordInList);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.readFromFile);
            this.Name = "Form1";
            this.Text = "Алехин Сергей ИУ5-31";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button readFromFile;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox findWordInList;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label downloadTimeLabel;
        private System.Windows.Forms.Label findTimeLabel;
        private System.Windows.Forms.Button findInList;
        private System.Windows.Forms.ListBox listBox1;
    }
}

